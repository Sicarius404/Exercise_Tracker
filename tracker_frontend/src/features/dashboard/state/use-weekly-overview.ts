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

export const useWeeklyOverviewStore = create<WeeklyOverviewState>()(
  immer((set) => {
    const now = new Date();
    return {
      metrics: null,
      isLoading: false,
      error: null,
      hasLoaded: false,
      currentMonth: now.getMonth(),
      currentYear: now.getFullYear(),
      loadMetrics: async (userId: string, month?: number, year?: number) => {
        let targetMonth: number;
        let targetYear: number;
        
        set((state) => {
          state.isLoading = true;
          state.error = null;
          targetMonth = month ?? state.currentMonth;
          targetYear = year ?? state.currentYear;
        });
        
        try {
          const data = await fetchDashboardData<MonthlyStats>("monthlyStats", { 
            userId,
            query: { month: targetMonth!, year: targetYear! }
          });
          set((state) => {
            state.metrics = data;
            state.currentMonth = targetMonth!;
            state.currentYear = targetYear!;
            state.isLoading = false;
            state.hasLoaded = true;
          });
        } catch (err) {
          set((state) => {
            state.error =
              err instanceof Error ? err.message : "Unable to load monthly stats";
            state.isLoading = false;
          });
        }
      },
      setMonth: (month: number, year: number) => {
        set((state) => {
          state.currentMonth = month;
          state.currentYear = year;
        });
      },
    };
  })
);
