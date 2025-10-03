import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { httpRequest } from "@/lib/http";
import { runEndpoints } from "@/lib/config";
import type { Run } from "@/lib/types";

type CreateRunPayload = {
  date: string;
  distance: number;
  duration: number;
  pace: number;
  notes?: string;
};

type RunsState = {
  runs: Run[];
  isLoading: boolean;
  error: string | null;
  loadRuns: (userId: string) => Promise<void>;
  createRun: (payload: CreateRunPayload, userId: string) => Promise<void>;
};

export const useRunsStore = create<RunsState>()(
  immer((set) => ({
    runs: [],
    isLoading: false,
    error: null,
    loadRuns: async (userId: string) => {
      set((state) => {
        state.isLoading = true;
        state.error = null;
      });

      try {
        const response = await httpRequest<Run[]>(runEndpoints.runs, {
          query: { userId },
        });
        set((state) => {
          state.runs = response;
          state.isLoading = false;
        });
      } catch (err) {
        set((state) => {
          state.error =
            err instanceof Error ? err.message : "Unable to load runs";
          state.isLoading = false;
        });
      }
    },
    createRun: async (payload, userId: string) => {
      const tempId = Date.now();
      const optimisticRun = {
        id: tempId,
        userId: Number(userId),
        stravaId: null,
        date: payload.date,
        distance: payload.distance,
        duration: payload.duration,
        pace: payload.pace,
        notes: payload.notes ?? null,
      } satisfies Run;

      set((state) => {
        state.runs.unshift(optimisticRun);
      });

      try {
        const createdRun = await httpRequest<Run>(runEndpoints.runs, {
          method: "POST",
          body: {
            ...payload,
            userId,
          },
        });

        set((state) => {
          const index = state.runs.findIndex((run: Run) => run.id === tempId);
          if (index !== -1) {
            state.runs[index] = createdRun;
          }
        });
      } catch (err) {
        set((state) => {
          state.runs = state.runs.filter((run: Run) => run.id !== tempId);
          state.error =
            err instanceof Error ? err.message : "Unable to create run";
        });
      }
    },
  })),
);
