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
  }> {
    if (error) {
      return { error: "Strava authorization failed", details: error };
    }

    if (!code) {
      return { error: "No authorization code provided" };
    }

    try {
      const tokenData = await this.stravaService.exchangeCodeForToken(code);
      return {
        message: "Successfully connected to Strava",
        tokenData,
      };
    } catch (err) {
      return {
        error: "Failed to exchange code for token",
        details: err.message,
      };
    }
  }

  @Post("import-runs")
  async importRuns(@Body() body: { accessToken: string; userId: number }) {
    try {
      const activities = await this.stravaService.getActivities(
        body.accessToken
      );

      // Convert Strava activities to our run format
      const runs = activities
        .filter((activity) => activity.type === "Run")
        .map((activity) =>
          this.stravaService.convertStravaActivityToRun(activity, body.userId)
        );

      return {
        message: `Found ${runs.length} runs to import`,
        runs,
      };
    } catch (err) {
      return { error: "Failed to import runs", details: err.message };
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
