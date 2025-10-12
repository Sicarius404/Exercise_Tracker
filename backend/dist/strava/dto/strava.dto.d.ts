export declare class ImportRunsDto {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    userId: string;
    athleteId: string;
}
export declare class SyncRunsDto {
    userId: string;
}
export declare class GetActivitiesDto {
    accessToken: string;
    page?: string;
}
export declare class GetAthleteDto {
    accessToken: string;
}
export declare class GetConnectionStatusDto {
    userId: string;
}
