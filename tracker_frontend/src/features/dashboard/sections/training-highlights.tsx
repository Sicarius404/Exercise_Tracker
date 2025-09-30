"use client";

import { useEffect } from "react";
import { AlarmClock, BrainCircuit, ClipboardList } from "lucide-react";
import styles from "../dashboard-page.module.css";
import DashboardCard from "@/features/dashboard/shared/dashboard-card";
import {
  TrainingHighlight,
  useTrainingHighlightsStore,
} from "@/features/dashboard/state/use-training-highlights";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  AlarmClock,
  ClipboardList,
};

const FALLBACK_HIGHLIGHTS: TrainingHighlight[] = [
  {
    id: "default-1",
    title: "Plan your key workout",
    description:
      "Sync a quality session to unlock tailored pacing and fueling notes.",
    icon: "BrainCircuit",
  },
  {
    id: "default-2",
    title: "Balance your recovery",
    description:
      "Log recent sleep and fatigue scores to adjust upcoming workouts.",
    icon: "AlarmClock",
  },
  {
    id: "default-3",
    title: "Review your focus",
    description:
      "Align next week’s long run with the marathon objective and weather window.",
    icon: "ClipboardList",
  },
];

export default function TrainingHighlights() {
  const { highlights, isLoading, error, hasLoaded, loadHighlights } =
    useTrainingHighlightsStore();

  useEffect(() => {
    if (!hasLoaded && !isLoading && !error) {
      void loadHighlights();
    }
  }, [hasLoaded, isLoading, error, loadHighlights]);

  const items = highlights.length ? highlights : FALLBACK_HIGHLIGHTS;

  return (
    <DashboardCard>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Training insights</div>
          <div className={styles.cardMeta}>
            Generated from weekly plan + Strava sync
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? BrainCircuit;
          return (
            <div key={item.id} className={styles.listItem}>
              <div>
                <div className={styles.listItemTitle}>{item.title}</div>
                <div className={styles.listItemMeta}>{item.description}</div>
              </div>
              <Icon className="h-4 w-4 text-slate-400" />
            </div>
          );
        })}
        {error ? (
          <div className="rounded-md bg-rose-50 p-3 text-xs text-rose-600">
            {error}
          </div>
        ) : null}
        {isLoading ? (
          <div className="text-xs text-slate-400">Loading highlights…</div>
        ) : null}
      </div>
    </DashboardCard>
  );
}
