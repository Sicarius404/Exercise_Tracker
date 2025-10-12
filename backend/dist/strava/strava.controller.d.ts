import { StravaService } from "./strava.service";
import { ImportRunsDto, SyncRunsDto, GetActivitiesDto, GetAthleteDto, GetConnectionStatusDto } from "./dto/strava.dto";
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
export declare class StravaController {
    private readonly stravaService;
    constructor(stravaService: StravaService);
    getAuthUrl(): {
        authorizationUrl: string;
    };
    handleCallback(code: string, error?: string): Promise<{
        error?: string;
        details?: string;
        message?: string;
        tokenData?: StravaTokenResponse;
        athleteId?: string;
    }>;
    importRuns(importRunsDto: ImportRunsDto): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: any;
        message?: undefined;
        success?: undefined;
    }>;
    getConnectionStatus(getConnectionStatusDto: GetConnectionStatusDto): Promise<{
        connected: boolean;
        athleteId?: string;
        error?: string;
    }>;
    syncRuns(syncRunsDto: SyncRunsDto): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: any;
        message?: undefined;
        success?: undefined;
    }>;
    getActivities(getActivitiesDto: GetActivitiesDto): Promise<{
        activities?: StravaActivity[];
        error?: string;
        details?: string;
    }>;
    getAthlete(getAthleteDto: GetAthleteDto): Promise<{
        athlete?: any;
        error?: string;
        details?: string;
    }>;
}
export {};
