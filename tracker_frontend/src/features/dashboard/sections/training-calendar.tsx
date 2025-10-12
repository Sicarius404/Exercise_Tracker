"use client";

import { useEffect } from "react";
import {
  CalendarRange,
  CheckCircle2,
  Clock4,
  Activity,
  Dumbbell,
} from "lucide-react";
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

function getWorkoutIcon(type: string) {
  switch (type.toLowerCase()) {
    case "run":
      return <Activity className="h-3.5 w-3.5" />;
    case "gym":
      return <Dumbbell className="h-3.5 w-3.5" />;
    default:
      return <CalendarRange className="h-3.5 w-3.5" />;
  }
}

function renderWorkoutItem(workout: CalendarWorkout) {
  return (
    <div
      key={`${workout.type}-${workout.planId ?? workout.description}-${
        workout.date
      }`}
      className="group flex items-center justify-between p-2.5 rounded-lg bg-white/60 hover:bg-white/80 transition-all duration-200 border border-transparent hover:border-indigo-100"
    >
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
          {getWorkoutIcon(workout.type)}
        </div>
        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
          {workout.description}
        </span>
      </div>
      <span className="text-xs text-slate-500 font-medium">
        {formatWorkoutDate(workout.date)}
      </span>
    </div>
  );
}

export default function TrainingCalendar() {
  const { userId, isLoading: isLoadingUser } = useCurrentUser();
  const { calendar, isLoading, hasLoaded, loadCalendar } =
    useTrainingCalendar();

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
      {isLoading || !calendar ? (
        <div className="flex items-center justify-center h-32 text-slate-400 text-sm">
          Loading calendar...
        </div>
      ) : (
        <div className="w-full text-left space-y-4">
          <div className="text-sm font-semibold text-indigo-700 flex items-center gap-2">
            <CalendarRange className="h-4 w-4" />
            This Week's Training
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
                  <CalendarRange className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Planned Sessions</span>
                </div>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                  {calendar.plannedWorkouts.length} workouts
                </span>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {calendar.plannedWorkouts.length > 0 ? (
                  calendar.plannedWorkouts.map((item) =>
                    renderWorkoutItem(item)
                  )
                ) : (
                  <div className="text-center py-4 text-slate-400 text-sm">
                    No planned workouts this week
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Completed</span>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                  {calendar.completedWorkouts.length} done
                </span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {calendar.completedWorkouts.length > 0 ? (
                  calendar.completedWorkouts.map((item) =>
                    renderWorkoutItem(item)
                  )
                ) : (
                  <div className="text-center py-4 text-slate-400 text-sm">
                    No completed workouts yet
                  </div>
                )}
              </div>

              {calendar.completedWorkouts.length > 0 && (
                <div className="mt-4 pt-3 border-t border-emerald-100">
                  <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 rounded-lg p-2">
                    <Clock4 className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="font-medium">
                      Recovery window synced to HRV
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardCard>
  );
}
