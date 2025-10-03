"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";
import type { PersonalRecords } from "@/lib/types";

type PersonalRecordsState = {
  records: PersonalRecords | null;
  isLoading: boolean;
  error: string | null;
  hasLoaded: boolean;
  loadRecords: (userId: string) => Promise<void>;
};

export const usePersonalRecordsStore = create<PersonalRecordsState>()(
  immer((set) => ({
    records: null,
    isLoading: false,
    error: null,
    hasLoaded: false,
    loadRecords: async (userId: string) => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        const data = await fetchDashboardData<PersonalRecords>(
          "personalRecords",
          { userId }
        );
        set((state) => {
          state.records = data;
          state.isLoading = false;
          state.hasLoaded = true;
        });
      } catch (err) {
        set((state) => {
          state.error =
            err instanceof Error
              ? err.message
              : "Unable to load personal records";
          state.isLoading = false;
        });
      }
    },
  }))
);
