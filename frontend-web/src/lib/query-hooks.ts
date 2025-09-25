import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { DashboardResponse } from "@/types/stats";
import type { Run } from "@/types/runs";
import type { RunPlan } from "@/types/run-plans";

export const dashboardKeys = {
  all: ["dashboard"] as const,
  user: (userId: number) => [...dashboardKeys.all, userId] as const,
};

export const runsKeys = {
  all: ["runs"] as const,
  user: (userId: number) => [...runsKeys.all, userId] as const,
};

export const runPlansKeys = {
  all: ["runPlans"] as const,
  user: (userId: number) => [...runPlansKeys.all, userId] as const,
};

export function useDashboard(userId: number) {
  return useQuery({
    queryKey: dashboardKeys.user(userId),
    queryFn: async () =>
      apiClient.get<DashboardResponse>(`/stats/dashboard?userId=${userId}`),
  });
}

export function useRuns(userId: number) {
  return useQuery({
    queryKey: runsKeys.user(userId),
    queryFn: async () => apiClient.get<Run[]>(`/runs?userId=${userId}`),
  });
}

export function useRunPlans(userId: number) {
  return useQuery({
    queryKey: runPlansKeys.user(userId),
    queryFn: async () =>
      apiClient.get<RunPlan[]>(`/run-plans?userId=${userId}`),
  });
}
