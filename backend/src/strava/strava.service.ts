import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { RunsService } from "../runs/runs.service";
import { PrismaService } from "../database/prisma.service";

interface StravaTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  expires_in: number;
  token_type: string;
}

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  type: string;
  start_date: string;
  start_date_local: string;
  average_speed: number;
  max_speed: number;
  total_elevation_gain: number;
  average_heartrate?: number;
  max_heartrate?: number;
  description?: string;
}

@Injectable()
export class StravaService {
  private readonly STRAVA_API_BASE = "https://www.strava.com/api/v3";
  private readonly CLIENT_ID = process.env.STRAVA_CLIENT_ID;
  private readonly CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;

  constructor(
    private readonly runsService: RunsService,
    private readonly prisma: PrismaService
  ) {}

  async exchangeCodeForToken(code: string): Promise<StravaTokenResponse> {
    try {
      const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: this.CLIENT_ID,
          client_secret: this.CLIENT_SECRET,
          code,
          grant_type: "authorization_code",
        }),
      });

      if (!response.ok) {
        throw new HttpException(
          "Failed to exchange code for token",
          HttpStatus.BAD_REQUEST
        );
      }

      return response.json();
    } catch (error) {
      throw new HttpException(
        "Strava authentication failed",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async refreshToken(refreshToken: string): Promise<StravaTokenResponse> {
    try {
      const response = await fetch("https://www.strava.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: this.CLIENT_ID,
          client_secret: this.CLIENT_SECRET,
          refresh_token: refreshToken,
          grant_type: "refresh_token",
        }),
      });

      if (!response.ok) {
        throw new HttpException(
          "Failed to refresh token",
          HttpStatus.BAD_REQUEST
        );
      }

      return response.json();
    } catch (error) {
      throw new HttpException(
        "Token refresh failed",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getActivities(
    accessToken: string,
    perPage = 30,
    page = 1
  ): Promise<StravaActivity[]> {
    try {
      const response = await fetch(
        `${this.STRAVA_API_BASE}/athlete/activities?per_page=${perPage}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Strava API error:", response.status, errorText);
        throw new HttpException(
          `Failed to fetch activities from Strava: ${response.status} - ${errorText}`,
          HttpStatus.BAD_REQUEST
        );
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching Strava activities:", error);
      throw new HttpException(
        `Failed to fetch Strava activities: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getActivity(
    accessToken: string,
    activityId: string
  ): Promise<StravaActivity> {
    try {
      const response = await fetch(
        `${this.STRAVA_API_BASE}/activities/${activityId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new HttpException(
          "Failed to fetch activity from Strava",
          HttpStatus.BAD_REQUEST
        );
      }

      return response.json();
    } catch (error) {
      throw new HttpException(
        "Failed to fetch Strava activity",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAthlete(accessToken: string): Promise<any> {
    try {
      const response = await fetch(`${this.STRAVA_API_BASE}/athlete`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new HttpException(
          "Failed to fetch athlete data from Strava",
          HttpStatus.BAD_REQUEST
        );
      }

      return response.json();
    } catch (error) {
      throw new HttpException(
        "Failed to fetch Strava athlete data",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async importStravaActivities(
    userId: string,
    accessToken: string
  ): Promise<void> {
    try {
      const stravaActivities = await this.getActivities(accessToken);
      const runActivities = stravaActivities.filter(act => act.type === "Run");

      for (const activity of runActivities) {
        const existingRun = await this.runsService.findByStravaId(
          activity.id.toString()
        );

        if (!existingRun) {
          const runData = this.convertStravaActivityToRun(activity, userId);
          await this.runsService.create(runData);
        }
      }
    } catch (error) {
      console.error("Error importing Strava activities:", error);
      throw new HttpException(
        `Failed to import Strava activities: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  convertStravaActivityToRun(stravaActivity: StravaActivity, userId: string) {
    // Convert meters to kilometers
    const distance = stravaActivity.distance / 1000;

    // Convert seconds to minutes for pace calculation
    const pace =
      stravaActivity.moving_time > 0
        ? stravaActivity.moving_time / 60 / distance
        : 0;

    return {
      stravaId: stravaActivity.id.toString(),
      date: new Date(stravaActivity.start_date),
      distance,
      duration: stravaActivity.moving_time / 60, // Convert to minutes
      pace,
      notes: stravaActivity.description || `${stravaActivity.name} via Strava`,
      userId,
    };
  }

  getAuthorizationUrl(): string {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID!,
      response_type: "code",
      redirect_uri:
        process.env.STRAVA_REDIRECT_URI ||
        "http://localhost:3000/strava/callback",
      scope: "read,activity:read_all",
      approval_prompt: "auto",
    });

    return `https://www.strava.com/oauth/authorize?${params.toString()}`;
  }

  async saveStravaTokens(
    userId: string,
    tokenData: StravaTokenResponse,
    athleteId: string
  ): Promise<void> {
    try {
      const expiresAt = new Date(tokenData.expires_at * 1000);
      await this.prisma.account.upsert({
        where: {
          id: `${userId}_strava_${athleteId}`,
        },
        create: {
          id: `${userId}_strava_${athleteId}`,
          userId,
          providerId: "strava",
          accountId: athleteId,
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          accessTokenExpiresAt: expiresAt,
          scope: "read,activity:read_all",
        },
        update: {
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          accessTokenExpiresAt: expiresAt,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error("Error saving Strava tokens:", error);
      throw new HttpException(
        "Failed to save Strava connection",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getStravaAccount(userId: string): Promise<any> {
    try {
      const account = await this.prisma.account.findFirst({
        where: {
          userId,
          providerId: "strava",
        },
      });
      return account;
    } catch (error) {
      console.error("Error fetching Strava account:", error);
      return null;
    }
  }

  async getValidAccessToken(userId: string): Promise<string | null> {
    try {
      const account = await this.getStravaAccount(userId);
      if (!account) {
        return null;
      }
      const now = new Date();
      if (account.accessTokenExpiresAt && account.accessTokenExpiresAt > now) {
        return account.accessToken;
      }
      if (account.refreshToken) {
        const tokenData = await this.refreshToken(account.refreshToken);
        await this.saveStravaTokens(userId, tokenData, account.accountId);
        return tokenData.access_token;
      }
      return null;
    } catch (error) {
      console.error("Error getting valid access token:", error);
      return null;
    }
  }
}
