"use client";

import { useEffect } from "react";
import { Trophy } from "lucide-react";
import styles from "../dashboard-page.module.css";
import DashboardCard from "@/features/dashboard/shared/dashboard-card";
import { usePersonalRecordsStore } from "@/features/dashboard/state/use-personal-records";
import type { PersonalRecords as PersonalRecordsResponse } from "@/lib/types";

const RUN_LABELS: Record<
  keyof Pick<
    PersonalRecordsResponse,
    "fastest5k" | "fastest10k" | "fastestMarathon"
  >,
  string
> = {
  fastest5k: "Fastest 5K",
  fastest10k: "Fastest 10K",
  fastestMarathon: "Marathon PR",
};

const LIFT_LABELS: Record<
  keyof Pick<
    PersonalRecordsResponse,
    "heaviestBench" | "heaviestDeadlift" | "heaviestSquat"
  >,
  string
> = {
  heaviestSquat: "Back Squat",
  heaviestBench: "Bench Press",
  heaviestDeadlift: "Deadlift",
};

function formatDuration(minutes: number | null): string {
  if (minutes === null || Number.isNaN(minutes)) {
    return "—";
  }
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  if (hours === 0) {
    return `${mins} min`;
  }
  return `${hours}h ${mins}m`;
}

function formatWeight(weight: number | null): string {
  if (weight === null || Number.isNaN(weight)) {
    return "—";
  }
  return `${weight.toFixed(1)} kg`;
}

export default function PersonalRecords() {
  const { records, isLoading, error, hasLoaded, loadRecords } = usePersonalRecordsStore();

  useEffect(() => {
    if (!hasLoaded && !isLoading && !error) {
      void loadRecords();
    }
  }, [hasLoaded, isLoading, error, loadRecords]);

  return (
    <DashboardCard>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Personal records</div>
          <div className={styles.cardMeta}>
            Automatic tracking synced from race / gym logs
          </div>
        </div>
        <div className={styles.badge}>
          <Trophy className="h-3.5 w-3.5" />
          Goal: Sub 2:50 marathon
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-2 text-xs uppercase tracking-wide text-slate-400">
            Run PRs
          </div>
          <div className="grid grid-cols-1 gap-3">
            {(Object.keys(RUN_LABELS) as Array<keyof typeof RUN_LABELS>).map(
              (key) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-600">
                      {RUN_LABELS[key]}
                    </div>
                    <div className="text-xs text-slate-400">
                      Updated from race results
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-slate-900">
                    {isLoading ? "…" : formatDuration(records?.[key] ?? null)}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-2 text-xs uppercase tracking-wide text-slate-400">
            Strength PRs
          </div>
          <div className="grid grid-cols-1 gap-3">
            {(Object.keys(LIFT_LABELS) as Array<keyof typeof LIFT_LABELS>).map(
              (key) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-600">
                      {LIFT_LABELS[key]}
                    </div>
                    <div className="text-xs text-slate-400">
                      Track peak lifts from gym log
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-slate-900">
                    {isLoading ? "…" : formatWeight(records?.[key] ?? null)}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {error ? (
          <div className="rounded-md bg-rose-50 p-3 text-sm text-rose-600">
            {error}
          </div>
        ) : null}
      </div>
    </DashboardCard>
  );
}
