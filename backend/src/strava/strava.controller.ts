import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { StravaService } from "./strava.service";
import {
  ImportRunsDto,
  SyncRunsDto,
  GetActivitiesDto,
  GetAthleteDto,
  GetConnectionStatusDto,
} from "./dto/strava.dto";

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
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
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
    } catch (err: any) {
      return {
        error: "Failed to exchange code for token",
        details: err.message,
      };
    }
  }

  @Post("import-runs")
  async importRuns(@Body() importRunsDto: ImportRunsDto) {
    try {
      await this.stravaService.importStravaActivities(
        importRunsDto.userId,
        importRunsDto.accessToken
      );
      await this.stravaService.saveStravaTokens(
        importRunsDto.userId,
        {
          access_token: importRunsDto.accessToken,
          refresh_token: importRunsDto.refreshToken,
          expires_at: importRunsDto.expiresAt,
          expires_in: 0,
          token_type: "Bearer",
        },
        importRunsDto.athleteId
      );

      return {
        message: `Successfully imported runs from Strava`,
        success: true,
      };
    } catch (err: any) {
      return { error: "Failed to import runs", details: err.message };
    }
  }

  @Get("connection-status")
  async getConnectionStatus(
    @Query() getConnectionStatusDto: GetConnectionStatusDto
  ): Promise<{
    connected: boolean;
    athleteId?: string;
    error?: string;
  }> {
    try {
      const account = await this.stravaService.getStravaAccount(
        getConnectionStatusDto.userId
      );
      if (!account) {
        return { connected: false };
      }
      return {
        connected: true,
        athleteId: account.accountId,
      };
    } catch (err: any) {
      return {
        connected: false,
        error: err.message,
      };
    }
  }

  @Post("sync-runs")
  async syncRuns(@Body() syncRunsDto: SyncRunsDto) {
    try {
      const accessToken = await this.stravaService.getValidAccessToken(
        syncRunsDto.userId
      );
      if (!accessToken) {
        return {
          error: "Not connected to Strava",
          details: "Please connect your Strava account first",
        };
      }
      await this.stravaService.importStravaActivities(
        syncRunsDto.userId,
        accessToken
      );
      return {
        message: "Successfully synced runs from Strava",
        success: true,
      };
    } catch (err: any) {
      return { error: "Failed to sync runs", details: err.message };
    }
  }

  @Get("activities")
  async getActivities(@Query() getActivitiesDto: GetActivitiesDto): Promise<{
    activities?: StravaActivity[];
    error?: string;
    details?: string;
  }> {
    try {
      const activities = await this.stravaService.getActivities(
        getActivitiesDto.accessToken,
        30,
        parseInt(getActivitiesDto.page || "1")
      );
      return { activities };
    } catch (err: any) {
      return { error: "Failed to fetch activities", details: err.message };
    }
  }

  @Get("athlete")
  async getAthlete(
    @Query() getAthleteDto: GetAthleteDto
  ): Promise<{ athlete?: any; error?: string; details?: string }> {
    try {
      const athlete = await this.stravaService.getAthlete(
        getAthleteDto.accessToken
      );
      return { athlete };
    } catch (err: any) {
      return { error: "Failed to fetch athlete data", details: err.message };
    }
  }
}
