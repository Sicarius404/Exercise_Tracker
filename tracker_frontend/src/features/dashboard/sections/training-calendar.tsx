"use client";

import { useEffect } from "react";
import { CalendarRange, CheckCircle2, Clock4 } from "lucide-react";
import styles from "../dashboard-page.module.css";
import DashboardCard from "@/features/dashboard/shared/dashboard-card";
import { useCurrentUser } from "@/lib/use-current-user";
import { useTrainingCalendar } from "@/features/dashboard/state/use-training-calendar";
import type { CalendarWorkout } from "@/lib/types";

function formatWorkoutDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function renderWorkoutItem(workout: CalendarWorkout) {
  return (
    <li
      key={`${workout.type}-${workout.planId ?? workout.description}-${
        workout.date
      }`}
      className="flex justify-between"
    >
      <span>{workout.description}</span>
      <span className="text-xs text-slate-400">
        {formatWorkoutDate(workout.date)}
      </span>
    </li>
  );
}

export default function TrainingCalendar() {
  const { userId, isLoading: isLoadingUser } = useCurrentUser();
  const { calendar, isLoading, hasLoaded, loadCalendar } = useTrainingCalendar();

  useEffect(() => {
    if (!hasLoaded && !isLoading && userId && !isLoadingUser) {
      void loadCalendar(userId);
    }
  }, [hasLoaded, isLoading, userId, isLoadingUser, loadCalendar]);

  return (
    <DashboardCard className={styles.calendarCard}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Calendar</div>
          <div className={styles.cardMeta}>Planned vs completed workouts</div>
        </div>
      </div>
      <div className={styles.chartPlaceholder}>
        {isLoading || !calendar ? (
          "Loading calendar heatmap"
        ) : (
          <div className="w-full text-left">
            <div className="text-sm font-medium text-indigo-600 mb-2">
              Week snapshot
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/80 backdrop-blur border border-indigo-100 p-4">
                <div className="flex items-center gap-2 text-indigo-600">
                  <CalendarRange className="h-4 w-4" /> Planned sessions
                </div>
                <ul className="mt-2 grid gap-1 text-sm text-slate-600">
                  {calendar.plannedWorkouts.map((item) =>
                    renderWorkoutItem(item)
                  )}
                </ul>
              </div>
              <div className="rounded-xl bg-white/80 backdrop-blur border border-indigo-100 p-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" /> Completed
                </div>
                <ul className="mt-2 grid gap-1 text-sm text-slate-600">
                  {calendar.completedWorkouts.map((item) =>
                    renderWorkoutItem(item)
                  )}
                </ul>
                <div className="mt-3 flex items-center gap-2 text-xs text-indigo-400">
                  <Clock4 className="h-3.5 w-3.5" /> Recovery window synced to
                  HRV
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
