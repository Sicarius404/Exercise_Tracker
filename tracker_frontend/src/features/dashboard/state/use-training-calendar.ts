import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { CalendarResponse } from "@/lib/types";

type TrainingCalendarState = {
  calendar: CalendarResponse | null;
  isLoading: boolean;
  error: string | null;
  hasLoaded: boolean;
  loadCalendar: (
    userId: string,
    options?: { month?: number; year?: number }
  ) => Promise<void>;
};

const MIN_YEAR = 2010;
const MAX_YEAR = 2030;

export const useTrainingCalendar = create<TrainingCalendarState>()(
  immer((set) => ({
    calendar: null,
    isLoading: false,
    error: null,
    hasLoaded: false,
    loadCalendar: async (
      userId: string,
      options?: { month?: number; year?: number }
    ) => {
      if (!userId) {
        set((state) => {
          state.error = "Missing user identifier";
        });
        return;
      }
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      const now = new Date();
      const requestedMonthIndex = options?.month ?? now.getMonth();
      const requestedYear = options?.year ?? now.getFullYear();
      const clampedYear = Math.min(Math.max(requestedYear, MIN_YEAR), MAX_YEAR);
      const clampedMonthIndex = Math.min(Math.max(requestedMonthIndex, 0), 11);
      const apiMonth = clampedMonthIndex + 1;
      try {
        const data = await fetchDashboardData<CalendarResponse>("calendar", {
          userId,
          query: { month: apiMonth, year: clampedYear },
        });
        set((state) => {
          state.calendar = data;
          state.isLoading = false;
          state.hasLoaded = true;
        });
      } catch (err) {
        set((state) => {
          state.error =
            err instanceof Error ? err.message : "Unable to load calendar";
          state.isLoading = false;
        });
      }
    },
  }))
);
