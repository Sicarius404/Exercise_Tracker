import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { CalendarResponse } from "@/lib/types";

type TrainingCalendarState = {
  calendar: CalendarResponse | null;
  isLoading: boolean;
  error: string | null;
  loadCalendar: () => Promise<void>;
};

export const useTrainingCalendar = create<TrainingCalendarState>()(
  immer((set) => ({
    calendar: null,
    isLoading: false,
    error: null,
    loadCalendar: async () => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        const data = await fetchDashboardData<CalendarResponse>("calendar");
        set((state) => {
          state.calendar = data;
          state.isLoading = false;
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
