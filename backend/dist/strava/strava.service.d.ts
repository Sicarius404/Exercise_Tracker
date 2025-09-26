import { RunsService } from "../runs/runs.service";
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
export declare class StravaService {
    private readonly runsService;
    private readonly STRAVA_API_BASE;
    private readonly CLIENT_ID;
    private readonly CLIENT_SECRET;
    constructor(runsService: RunsService);
    exchangeCodeForToken(code: string): Promise<StravaTokenResponse>;
    refreshToken(refreshToken: string): Promise<StravaTokenResponse>;
    getActivities(accessToken: string, perPage?: number, page?: number): Promise<StravaActivity[]>;
    getActivity(accessToken: string, activityId: string): Promise<StravaActivity>;
    getAthlete(accessToken: string): Promise<any>;
    importStravaActivities(userId: number, accessToken: string): Promise<void>;
    convertStravaActivityToRun(stravaActivity: StravaActivity, userId: number): {
        stravaId: string;
        date: Date;
        distance: number;
        duration: number;
        pace: number;
        notes: string;
        userId: number;
    };
    getAuthorizationUrl(): string;
}
export {};
