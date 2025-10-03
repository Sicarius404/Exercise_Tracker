import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { CalendarResponse } from "@/lib/types";

type TrainingCalendarState = {
  calendar: CalendarResponse | null;
  isLoading: boolean;
  error: string | null;
  hasLoaded: boolean;
  loadCalendar: (userId: string) => Promise<void>;
};

export const useTrainingCalendar = create<TrainingCalendarState>()(
  immer((set) => ({
    calendar: null,
    isLoading: false,
    error: null,
    hasLoaded: false,
    loadCalendar: async (userId: string) => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        const data = await fetchDashboardData<CalendarResponse>("calendar", { userId });
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
