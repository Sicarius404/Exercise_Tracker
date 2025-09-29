"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { WeeklyStats } from "@/lib/types";

type WeeklyOverviewState = {
  metrics: WeeklyStats | null;
  isLoading: boolean;
  error: string | null;
  loadMetrics: () => Promise<void>;
};

export const useWeeklyOverviewStore = create<WeeklyOverviewState>()(
  immer((set) => ({
    metrics: null,
    isLoading: false,
    error: null,
    loadMetrics: async () => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        const data = await fetchDashboardData<WeeklyStats>("weeklyStats");
        set((state) => {
          state.metrics = data;
          state.isLoading = false;
        });
      } catch (err) {
        set((state) => {
          state.error =
            err instanceof Error ? err.message : "Unable to load weekly stats";
          state.isLoading = false;
        });
      }
    },
  }))
);
