"use client";

import { useEffect } from "react";
import { Flame, Footprints, Gauge, MapPinned } from "lucide-react";
import styles from "../dashboard-page.module.css";
import DashboardCard from "@/features/dashboard/shared/dashboard-card";
import { useWeeklyOverviewStore } from "@/features/dashboard/state/use-weekly-overview";
import type { WeeklyStats } from "@/lib/types";

const HIGHLIGHT_CARDS: Array<{
  key: keyof WeeklyStats;
  label: string;
  suffix?: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}> = [
  {
    key: "totalMileage",
    label: "Mileage",
    suffix: "km",
    meta: "4 runs logged",
    icon: Footprints,
    gradient: "bg-gradient-to-br from-sky-100 to-white",
  },
  {
    key: "averagePace",
    label: "Average pace",
    suffix: "min/km",
    meta: "+3% vs last week",
    icon: Gauge,
    gradient: "bg-gradient-to-br from-emerald-100 to-white",
  },
  {
    key: "totalWeightLifted",
    label: "Weight lifted",
    suffix: "kg",
    meta: "18 sessions complete",
    icon: Flame,
    gradient: "bg-gradient-to-br from-amber-100 to-white",
  },
  {
    key: "completedExercises",
    label: "Completed sets",
    meta: "6 gym workouts",
    icon: MapPinned,
    gradient: "bg-gradient-to-br from-indigo-100 to-white",
  },
];

export default function WeeklyOverview() {
  const { metrics, isLoading, error, loadMetrics } = useWeeklyOverviewStore();

  useEffect(() => {
    if (!metrics && !isLoading && !error) {
      void loadMetrics();
    }
  }, [metrics, isLoading, error, loadMetrics]);

  return (
    <DashboardCard className={`${styles.card} ${styles.chartCard}`}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Weekly summary</div>
          <div className={styles.cardMeta}>
            Auto-synced from Strava every hour
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {HIGHLIGHT_CARDS.map((card) => (
          <div
            key={card.key}
            className={`rounded-2xl border border-white/50 p-4 shadow-sm ${card.gradient}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-slate-600">
                {card.label}
              </div>
              <card.icon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">
              {isLoading
                ? "..."
                : `${metrics?.[card.key] ?? 0}${card.suffix ?? ""}`}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
              {card.meta}
            </div>
          </div>
        ))}
      </div>
      {error ? (
        <div className="mt-4 rounded-md bg-rose-50 p-3 text-sm text-rose-600">
          {error}
        </div>
      ) : null}
    </DashboardCard>
  );
}
