"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { WeeklyStats } from "@/lib/types";

type WeeklyOverviewState = {
  metrics: WeeklyStats | null;
  isLoading: boolean;
  error: string | null;
  hasLoaded: boolean;
  loadMetrics: () => Promise<void>;
};

export const useWeeklyOverviewStore = create<WeeklyOverviewState>()(
  immer((set) => ({
    metrics: null,
    isLoading: false,
    error: null,
    hasLoaded: false,
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
          state.hasLoaded = true;
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
