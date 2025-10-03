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
    importRuns(body: {
        accessToken: string;
        refreshToken: string;
        expiresAt: number;
        userId: string;
        athleteId: string;
    }): Promise<{
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
    getConnectionStatus(userId: string): Promise<{
        connected: boolean;
        athleteId?: string;
        error?: string;
    }>;
    syncRuns(body: {
        userId: string;
    }): Promise<{
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
    getActivities(accessToken: string, page?: string): Promise<{
        activities?: StravaActivity[];
        error?: string;
        details?: string;
    }>;
    getAthlete(accessToken: string): Promise<{
        athlete?: any;
        error?: string;
        details?: string;
    }>;
}
export {};
