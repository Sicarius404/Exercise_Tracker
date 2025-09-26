export interface StravaAuthUrlResponse {
  readonly url: string;
}

export interface StravaTokenData {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresAt: number;
}

export interface StravaCallbackSuccess {
  readonly message: string;
  readonly tokenData: StravaTokenData;
}

export interface StravaCallbackError {
  readonly error: string;
  readonly details?: string;
}

export type StravaCallbackResponse =
  | StravaCallbackSuccess
  | StravaCallbackError
  | null;

export interface StravaActivity {
  readonly id: string;
  readonly name: string;
  readonly distance: number;
  readonly movingTime: number;
  readonly elapsedTime: number;
  readonly type: string;
  readonly startDate: string;
  readonly averageSpeed: number;
}

export interface StravaAthlete {
  readonly id: string;
  readonly username: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly profile: string;
}

export interface StravaImportRunsResponse {
  readonly runs: ReadonlyArray<{
    readonly stravaId: string;
    readonly date: string;
    readonly distance: number;
    readonly duration: number;
    readonly pace: number;
    readonly notes?: string;
  }>;
}
