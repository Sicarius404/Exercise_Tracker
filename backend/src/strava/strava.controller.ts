import { Controller, Get, Post, Query, Body, Redirect } from "@nestjs/common";
import { StravaService } from "./strava.service";

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

@Controller("strava")
export class StravaController {
  constructor(private readonly stravaService: StravaService) {}

  @Get("auth-url")
  getAuthUrl() {
    return {
      authorizationUrl: this.stravaService.getAuthorizationUrl(),
    };
  }

  @Get("callback")
  async handleCallback(
    @Query("code") code: string,
    @Query("error") error?: string
  ): Promise<{
    error?: string;
    details?: string;
    message?: string;
    tokenData?: StravaTokenResponse;
    athleteId?: string;
  }> {
    if (error) {
      return { error: "Strava authorization failed", details: error };
    }

    if (!code) {
      return { error: "No authorization code provided" };
    }

    try {
      const tokenData = await this.stravaService.exchangeCodeForToken(code);
      const athleteData = await this.stravaService.getAthlete(
        tokenData.access_token
      );
      return {
        message: "Successfully connected to Strava",
        tokenData,
        athleteId: athleteData.id.toString(),
      };
    } catch (err) {
      return {
        error: "Failed to exchange code for token",
        details: err.message,
      };
    }
  }

  @Post("import-runs")
  async importRuns(
    @Body()
    body: {
      accessToken: string;
      refreshToken: string;
      expiresAt: number;
      userId: string;
      athleteId: string;
    }
  ) {
    try {
      await this.stravaService.importStravaActivities(
        body.userId,
        body.accessToken
      );
      await this.stravaService.saveStravaTokens(
        body.userId,
        {
          access_token: body.accessToken,
          refresh_token: body.refreshToken,
          expires_at: body.expiresAt,
          expires_in: 0,
          token_type: "Bearer",
        },
        body.athleteId
      );

      return {
        message: `Successfully imported runs from Strava`,
        success: true,
      };
    } catch (err) {
      return { error: "Failed to import runs", details: err.message };
    }
  }

  @Get("connection-status")
  async getConnectionStatus(
    @Query("userId") userId: string
  ): Promise<{
    connected: boolean;
    athleteId?: string;
    error?: string;
  }> {
    try {
      const account = await this.stravaService.getStravaAccount(userId);
      if (!account) {
        return { connected: false };
      }
      return {
        connected: true,
        athleteId: account.accountId,
      };
    } catch (err) {
      return {
        connected: false,
        error: err.message,
      };
    }
  }

  @Post("sync-runs")
  async syncRuns(@Body() body: { userId: string }) {
    try {
      const accessToken = await this.stravaService.getValidAccessToken(
        body.userId
      );
      if (!accessToken) {
        return {
          error: "Not connected to Strava",
          details: "Please connect your Strava account first",
        };
      }
      await this.stravaService.importStravaActivities(
        body.userId,
        accessToken
      );
      return {
        message: "Successfully synced runs from Strava",
        success: true,
      };
    } catch (err) {
      return { error: "Failed to sync runs", details: err.message };
    }
  }

  @Get("activities")
  async getActivities(
    @Query("accessToken") accessToken: string,
    @Query("page") page?: string
  ): Promise<{
    activities?: StravaActivity[];
    error?: string;
    details?: string;
  }> {
    try {
      const activities = await this.stravaService.getActivities(
        accessToken,
        30,
        parseInt(page) || 1
      );
      return { activities };
    } catch (err) {
      return { error: "Failed to fetch activities", details: err.message };
    }
  }

  @Get("athlete")
  async getAthlete(
    @Query("accessToken") accessToken: string
  ): Promise<{ athlete?: any; error?: string; details?: string }> {
    try {
      const athlete = await this.stravaService.getAthlete(accessToken);
      return { athlete };
    } catch (err) {
      return { error: "Failed to fetch athlete data", details: err.message };
    }
  }
}
