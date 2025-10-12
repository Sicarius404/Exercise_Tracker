"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { WeeklyStats } from "@/lib/types";

type MonthlyStats = {
  totalRuns: number;
  totalDistance: number;
  totalGymSessions: number;
  totalWeightLifted: number;
  averagePace: number;
};

type WeeklyOverviewState = {
  metrics: MonthlyStats | null;
  isLoading: boolean;
  error: string | null;
  hasLoaded: boolean;
  currentMonth: number;
  currentYear: number;
  loadMetrics: (userId: string, month?: number, year?: number) => Promise<void>;
  setMonth: (month: number, year: number) => void;
};

const MIN_YEAR = 2010;
const MAX_YEAR = 2030;

export const useWeeklyOverviewStore = create<WeeklyOverviewState>()(
  immer((set, get) => {
    const now = new Date();
    return {
      metrics: null,
      isLoading: false,
      error: null,
      hasLoaded: false,
      currentMonth: now.getMonth(),
      currentYear: now.getFullYear(),
      loadMetrics: async (userId: string, month?: number, year?: number) => {
        set((state) => {
          state.isLoading = true;
          state.error = null;
        });

        const targetMonth = month ?? get().currentMonth;
        const targetYear = year ?? get().currentYear;

        const safeMonth = Math.min(Math.max(targetMonth, 0), 11);
        const safeYear = Math.min(Math.max(targetYear, MIN_YEAR), MAX_YEAR);

        try {
          const data = await fetchDashboardData<MonthlyStats>("monthlyStats", {
            userId,
            query: { month: safeMonth + 1, year: safeYear },
          });
          set((state) => {
            state.metrics = data;
            state.currentMonth = safeMonth;
            state.currentYear = safeYear;
            state.isLoading = false;
            state.hasLoaded = true;
          });
        } catch (err) {
          set((state) => {
            state.error =
              err instanceof Error
                ? err.message
                : "Unable to load monthly stats";
            state.isLoading = false;
          });
        }
      },
      setMonth: (month: number, year: number) => {
        set((state) => {
          const clampedYear = Math.min(Math.max(year, MIN_YEAR), MAX_YEAR);
          const clampedMonthIndex = Math.min(Math.max(month, 0), 11);
          state.currentMonth = clampedMonthIndex;
          state.currentYear = clampedYear;
        });
      },
    };
  })
);
