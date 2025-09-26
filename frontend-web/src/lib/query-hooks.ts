import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type {
  DashboardResponse,
  MonthlyStats,
  CalendarView,
  PersonalRecords,
  WeeklyStats,
} from "@/types/stats";
import type { Run, CreateRunInput, UpdateRunInput } from "@/types/runs";
import type {
  GymPlan,
  GymExercise,
  CompletedExercise,
  CreateGymPlanInput,
  UpdateGymPlanInput,
  CreateGymExerciseInput,
  UpdateGymExerciseInput,
  CompleteExerciseInput,
} from "@/types/gym-plans";
import type {
  RunPlan,
  CreateRunPlanInput,
  UpdateRunPlanInput,
} from "@/types/run-plans";
import type {
  StravaActivity,
  StravaAthlete,
  StravaAuthUrlResponse,
  StravaCallbackResponse,
  StravaImportRunsResponse,
} from "@/types/strava";

export const dashboardKeys = {
  all: ["dashboard"] as const,
  user: (userId: number) => [...dashboardKeys.all, userId] as const,
};

export const runsKeys = {
  all: ["runs"] as const,
  user: (userId: number) => [...runsKeys.all, userId] as const,
  detail: (userId: number, runId: number) =>
    [...runsKeys.user(userId), runId] as const,
  strava: (stravaId: string) => [...runsKeys.all, "strava", stravaId] as const,
};

export const runPlansKeys = {
  all: ["runPlans"] as const,
  user: (userId: number) => [...runPlansKeys.all, userId] as const,
  detail: (userId: number, planId: number) =>
    [...runPlansKeys.user(userId), planId] as const,
};

export const gymPlanKeys = {
  all: ["gymPlans"] as const,
  user: (userId: number) => [...gymPlanKeys.all, userId] as const,
  detail: (userId: number, planId: number) =>
    [...gymPlanKeys.user(userId), planId] as const,
};

export const statsKeys = {
  dashboard: (userId: number) => dashboardKeys.user(userId),
  weekly: (userId: number, weekStart?: string) =>
    ["stats", "weekly", userId, weekStart] as const,
  personalRecords: (userId: number) =>
    ["stats", "personal-records", userId] as const,
  calendar: (userId: number, month?: number, year?: number) =>
    ["stats", "calendar", userId, month, year] as const,
  monthly: (userId: number, month: number, year: number) =>
    ["stats", "monthly", userId, month, year] as const,
};

export const stravaKeys = {
  authUrl: ["strava", "auth-url"] as const,
  callback: (code?: string | null, error?: string | null) =>
    ["strava", "callback", code, error] as const,
  activities: (accessToken: string, page?: number) =>
    ["strava", "activities", accessToken, page] as const,
  athlete: (accessToken: string) => ["strava", "athlete", accessToken] as const,
};

export function useDashboard(userId: number) {
  return useQuery({
    queryKey: dashboardKeys.user(userId),
    queryFn: async () =>
      apiClient.get<DashboardResponse>(`/stats/dashboard?userId=${userId}`),
    enabled: userId > 0,
  });
}

export function useRuns(userId: number) {
  return useQuery({
    queryKey: runsKeys.user(userId),
    queryFn: async () => apiClient.get<Run[]>(`/runs?userId=${userId}`),
    enabled: userId > 0,
  });
}

export function useRunPlans(userId: number) {
  return useQuery({
    queryKey: runPlansKeys.user(userId),
    queryFn: async () =>
      apiClient.get<RunPlan[]>(`/run-plans?userId=${userId}`),
    enabled: userId > 0,
  });
}

export function useGymPlans(userId: number) {
  return useQuery({
    queryKey: gymPlanKeys.user(userId),
    queryFn: async () => apiClient.get<GymPlan[]>("/gym-plans"),
    enabled: userId > 0,
  });
}

export function useRun(runId: number, userId: number) {
  return useQuery({
    queryKey: runsKeys.detail(userId, runId),
    queryFn: async () => apiClient.get<Run>(`/runs/${runId}?userId=${userId}`),
    enabled: runId > 0 && userId > 0,
  });
}

export function useRunByStravaId(stravaId: string | null) {
  return useQuery({
    queryKey: stravaId ? runsKeys.strava(stravaId) : undefined,
    queryFn: async () =>
      stravaId ? apiClient.get<Run>(`/runs/strava/${stravaId}`) : null,
    enabled: Boolean(stravaId && stravaId.trim().length > 0),
  });
}

export function useMonthlyStats(userId: number, month: number, year: number) {
  return useQuery({
    queryKey: statsKeys.monthly(userId, month, year),
    queryFn: async () =>
      apiClient.get<MonthlyStats>(
        `/stats/monthly?userId=${userId}&month=${month}&year=${year}`
      ),
    enabled: userId > 0,
  });
}

export function useCreateRun() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateRunInput) => {
      return apiClient.post<Run>("/runs", input);
    },
    onSuccess: (run) => {
      queryClient.invalidateQueries({ queryKey: runsKeys.user(run.userId) });
      queryClient.invalidateQueries({
        queryKey: statsKeys.dashboard(run.userId),
      });
    },
  });
}

export function useUpdateRun(userId: number, runId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateRunInput) => {
      return apiClient.patch<Run>(`/runs/${runId}?userId=${userId}`, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: runsKeys.detail(userId, runId),
      });
      queryClient.invalidateQueries({ queryKey: runsKeys.user(userId) });
    },
  });
}

export function useDeleteRun(userId: number, runId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await apiClient.delete(`/runs/${runId}?userId=${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: runsKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useCreateRunPlan(userId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateRunPlanInput) => {
      return apiClient.post<RunPlan>("/run-plans", input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: runPlansKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useUpdateRunPlan(userId: number, planId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateRunPlanInput) => {
      return apiClient.patch<RunPlan>(`/run-plans/${planId}`, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: runPlansKeys.user(userId) });
      queryClient.invalidateQueries({
        queryKey: runPlansKeys.detail(userId, planId),
      });
    },
  });
}

export function useDeleteRunPlan(userId: number, planId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await apiClient.delete(`/run-plans/${planId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: runPlansKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useCreateGymPlan(userId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateGymPlanInput) => {
      return apiClient.post<GymPlan>("/gym-plans", input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
    },
  });
}

export function useUpdateGymPlan(userId: number, planId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateGymPlanInput) => {
      return apiClient.patch<GymPlan>(`/gym-plans/${planId}`, input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
      queryClient.invalidateQueries({
        queryKey: gymPlanKeys.detail(userId, planId),
      });
    },
  });
}

export function useDeleteGymPlan(userId: number, planId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await apiClient.delete(`/gym-plans/${planId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useCreateGymExercise(userId: number, planId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateGymExerciseInput) => {
      return apiClient.post<GymExercise>(
        `/gym-plans/${planId}/exercises`,
        input
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: gymPlanKeys.detail(userId, planId),
      });
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
    },
  });
}

export function useUpdateGymExercise(
  userId: number,
  exerciseId: number,
  planId?: number
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: UpdateGymExerciseInput) => {
      return apiClient.patch<GymExercise>(
        `/gym-plans/exercises/${exerciseId}`,
        input
      );
    },
    onSuccess: () => {
      if (planId) {
        queryClient.invalidateQueries({
          queryKey: gymPlanKeys.detail(userId, planId),
        });
      }
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useDeleteGymExercise(
  userId: number,
  exerciseId: number,
  planId?: number
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await apiClient.delete(`/gym-plans/exercises/${exerciseId}`);
    },
    onSuccess: () => {
      if (planId) {
        queryClient.invalidateQueries({
          queryKey: gymPlanKeys.detail(userId, planId),
        });
      }
      queryClient.invalidateQueries({ queryKey: gymPlanKeys.user(userId) });
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

export function useCompleteGymExercise(
  userId: number,
  exerciseId: number,
  planId?: number
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: CompleteExerciseInput) => {
      return apiClient.post<CompletedExercise>(
        `/gym-plans/exercises/${exerciseId}/complete`,
        input
      );
    },
    onSuccess: () => {
      if (planId) {
        queryClient.invalidateQueries({
          queryKey: gymPlanKeys.detail(userId, planId),
        });
      }
      queryClient.invalidateQueries({ queryKey: statsKeys.dashboard(userId) });
    },
  });
}

interface WeeklyStatsResponse {
  readonly totalMileage: number;
  readonly averagePace: number;
  readonly totalWeightLifted: number;
  readonly runCount: number;
  readonly completedExercises: number;
}

export function useWeeklyStats(userId: number, weekStart?: string) {
  return useQuery({
    queryKey: statsKeys.weekly(userId, weekStart),
    queryFn: async () =>
      apiClient.get<WeeklyStats>(
        `/stats/weekly?userId=${userId}${
          weekStart ? `&weekStart=${weekStart}` : ""
        }`
      ),
    enabled: userId > 0,
  });
}

export function usePersonalRecords(userId: number) {
  return useQuery({
    queryKey: statsKeys.personalRecords(userId),
    queryFn: async () =>
      apiClient.get<PersonalRecords>(
        `/stats/personal-records?userId=${userId}`
      ),
    enabled: userId > 0,
  });
}

export function useStatsCalendar(
  userId: number,
  month?: number,
  year?: number
) {
  return useQuery({
    queryKey: statsKeys.calendar(userId, month, year),
    queryFn: async () =>
      apiClient.get<CalendarView>(
        `/stats/calendar?userId=${userId}${
          month !== undefined ? `&month=${month}` : ""
        }${year !== undefined ? `&year=${year}` : ""}`
      ),
    enabled: userId > 0,
  });
}

export function useStravaAuthUrl() {
  return useQuery({
    queryKey: stravaKeys.authUrl,
    queryFn: async () =>
      apiClient.get<StravaAuthUrlResponse>("/strava/auth-url"),
  });
}

export function useStravaCallback(code?: string | null, error?: string | null) {
  return useQuery({
    queryKey: stravaKeys.callback(code, error),
    queryFn: async () => {
      if (!code && !error) {
        return null;
      }
      const params = new URLSearchParams();
      if (code) params.set("code", code);
      if (error) params.set("error", error);
      return apiClient.get<StravaCallbackResponse>(
        `/strava/callback?${params.toString()}`
      );
    },
    enabled: Boolean(code || error),
  });
}

export function useStravaActivities(accessToken?: string, page?: number) {
  return useQuery({
    queryKey: accessToken
      ? stravaKeys.activities(accessToken, page)
      : undefined,
    queryFn: async () => {
      if (!accessToken) return [];
      const params = new URLSearchParams({ accessToken });
      if (page !== undefined) {
        params.set("page", page.toString());
      }
      return apiClient.get<StravaActivity[]>(
        `/strava/activities?${params.toString()}`
      );
    },
    enabled: Boolean(accessToken),
  });
}

export function useStravaAthlete(accessToken?: string) {
  return useQuery({
    queryKey: accessToken ? stravaKeys.athlete(accessToken) : undefined,
    queryFn: async () => {
      if (!accessToken) return null;
      return apiClient.get<StravaAthlete>(
        `/strava/athlete?accessToken=${accessToken}`
      );
    },
    enabled: Boolean(accessToken),
  });
}

export function useStravaImportRuns() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      accessToken,
      userId,
    }: {
      accessToken: string;
      userId: number;
    }) => {
      return apiClient.post<StravaImportRunsResponse>("/strava/import-runs", {
        accessToken,
        userId,
      });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: runsKeys.user(variables.userId),
      });
      queryClient.invalidateQueries({
        queryKey: statsKeys.dashboard(variables.userId),
      });
    },
  });
}
