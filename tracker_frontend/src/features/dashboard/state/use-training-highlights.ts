"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { fetchDashboardData } from "./dashboard-actions";

export type TrainingHighlight = {
  id: string;
  title: string;
  description: string;
  icon: "BrainCircuit" | "AlarmClock" | "ClipboardList" | string;
};

export type TrainingHighlightsResponse = {
  trainingHighlights?: TrainingHighlight[];
};

type TrainingHighlightsState = {
  highlights: TrainingHighlight[];
  isLoading: boolean;
  error: string | null;
  loadHighlights: () => Promise<void>;
};

export const useTrainingHighlightsStore = create<TrainingHighlightsState>()(
  immer((set) => ({
    highlights: [],
    isLoading: false,
    error: null,
    loadHighlights: async () => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });
      try {
        const data = await fetchDashboardData<TrainingHighlightsResponse>(
          "dashboard"
        );
        const highlights = Array.isArray(data.trainingHighlights)
          ? data.trainingHighlights
          : [];
        set((state) => {
          state.highlights = highlights;
          state.isLoading = false;
        });
      } catch (err) {
        set((state) => {
          state.error =
            err instanceof Error
              ? err.message
              : "Unable to load training highlights";
          state.isLoading = false;
        });
      }
    },
  }))
);
