export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";

export const defaultUserId = Number(
  process.env.NEXT_PUBLIC_DEFAULT_USER_ID ?? 1
);

export const dashboardEndpoints = {
  dashboard: "/stats/dashboard",
  weeklyStats: "/stats/weekly",
  personalRecords: "/stats/personal-records",
  calendar: "/stats/calendar",
  monthlyStats: "/stats/monthly",
} as const;

export const runEndpoints = {
  runs: "/runs",
  runById: (id: number) => `/runs/${id}`,
  runByStravaId: (stravaId: string) => `/runs/strava/${stravaId}`,
} as const;

export const runPlanEndpoints = {
  plans: "/run-plans",
  byId: (id: number) => `/run-plans/${id}`,
} as const;

export const gymPlanEndpoints = {
  plans: "/gym-plans",
  byId: (id: number) => `/gym-plans/${id}`,
  exercises: (planId: number) => `/gym-plans/${planId}/exercises`,
  exerciseById: (exerciseId: number) => `/gym-plans/exercises/${exerciseId}`,
  completeExercise: (exerciseId: number) =>
    `/gym-plans/exercises/${exerciseId}/complete`,
} as const;

export const stravaEndpoints = {
  authUrl: "/strava/auth-url",
  callback: "/strava/callback",
  importRuns: "/strava/import-runs",
  activities: "/strava/activities",
  athlete: "/strava/athlete",
} as const;
