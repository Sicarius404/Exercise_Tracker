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
    }>;
    importRuns(body: {
        accessToken: string;
        userId: number;
    }): Promise<{
        message: string;
        runs: {
            stravaId: string;
            date: Date;
            distance: number;
            duration: number;
            pace: number;
            notes: string;
            userId: number;
        }[];
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: any;
        message?: undefined;
        runs?: undefined;
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
