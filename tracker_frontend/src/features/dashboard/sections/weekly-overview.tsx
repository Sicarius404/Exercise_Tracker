"use client";

import { useEffect } from "react";
import { Flame, Footprints, Gauge, MapPinned, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../dashboard-page.module.css";
import DashboardCard from "@/features/dashboard/shared/dashboard-card";
import { useWeeklyOverviewStore } from "@/features/dashboard/state/use-weekly-overview";
import { useCurrentUser } from "@/lib/use-current-user";

type MonthlyStats = {
  totalRuns: number;
  totalDistance: number;
  totalGymSessions: number;
  totalWeightLifted: number;
  averagePace: number;
};

const HIGHLIGHT_CARDS: Array<{
  key: keyof MonthlyStats;
  label: string;
  suffix?: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  formatValue?: (value: number) => string;
}> = [
  {
    key: "totalDistance",
    label: "Distance",
    suffix: " km",
    meta: "This month",
    icon: Footprints,
    gradient: "bg-gradient-to-br from-sky-100 to-white",
  },
  {
    key: "averagePace",
    label: "Average pace",
    suffix: " min/km",
    meta: "Across all runs",
    icon: Gauge,
    gradient: "bg-gradient-to-br from-emerald-100 to-white",
    formatValue: (value: number) => {
      const minutes = Math.floor(value);
      const seconds = Math.round((value - minutes) * 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  {
    key: "totalWeightLifted",
    label: "Weight lifted",
    suffix: " kg",
    meta: "All gym sessions",
    icon: Flame,
    gradient: "bg-gradient-to-br from-amber-100 to-white",
  },
  {
    key: "totalRuns",
    label: "Total runs",
    meta: "This month",
    icon: MapPinned,
    gradient: "bg-gradient-to-br from-indigo-100 to-white",
  },
];

export default function WeeklyOverview() {
  const { userId, isLoading: isLoadingUser } = useCurrentUser();
  const { metrics, isLoading, error, hasLoaded, currentMonth, currentYear, loadMetrics } = useWeeklyOverviewStore();

  useEffect(() => {
    if (!hasLoaded && !isLoading && !error && userId && !isLoadingUser) {
      void loadMetrics(userId);
    }
  }, [hasLoaded, isLoading, error, userId, isLoadingUser, loadMetrics]);

  const handlePreviousMonth = () => {
    if (!userId) return;
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    void loadMetrics(userId, newMonth, newYear);
  };

  const handleNextMonth = () => {
    if (!userId) return;
    const now = new Date();
    const isCurrentMonth = currentMonth === now.getMonth() && currentYear === now.getFullYear();
    if (isCurrentMonth) return;
    
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    void loadMetrics(userId, newMonth, newYear);
  };

  const monthDate = new Date(currentYear, currentMonth, 1);
  const now = new Date();
  const isCurrentMonth = currentMonth === now.getMonth() && currentYear === now.getFullYear();

  return (
    <DashboardCard className={`${styles.card} ${styles.chartCard}`}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Monthly summary</div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePreviousMonth}
              className="rounded p-1 hover:bg-slate-100 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4 text-slate-600" />
            </button>
            <div className={styles.cardMeta}>
              {monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <button
              onClick={handleNextMonth}
              disabled={isCurrentMonth}
              className="rounded p-1 hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4 text-slate-600" />
            </button>
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
                : card.formatValue
                ? `${card.formatValue(metrics?.[card.key] ?? 0)}${card.suffix ?? ""}`
                : `${(metrics?.[card.key] ?? 0).toFixed(2)}${card.suffix ?? ""}`}
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
