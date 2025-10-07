"use client";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRunsStore } from "@/features/runs/state/use-runs-store";
import { useCurrentUser } from "@/lib/use-current-user";
import PrimaryButton from "@/components/ui/primary-button/primary-button";
import SecondaryButton from "@/components/ui/secondary-button/secondary-button";
import styles from "./runs-page.module.css";

const runSchema = z.object({
  date: z.string(),
  distance: z.coerce.number().min(0, "Distance must be positive"),
  duration: z.coerce.number().min(0, "Duration must be positive"),
  pace: z.coerce.number().min(0, "Pace must be positive"),
  notes: z.string().max(280).optional(),
});

type RunForm = z.infer<typeof runSchema>;

export default function RunsPage() {
  const { userId, isLoading: isLoadingUser } = useCurrentUser();
  const { runs, isLoading, loadRuns, createRun } = useRunsStore();
  const { register, handleSubmit, reset, formState } = useForm<RunForm>({
    resolver: zodResolver(runSchema),
    defaultValues: {
      date: new Date().toISOString().substring(0, 10),
      distance: 5,
      duration: 30,
      pace: 6,
    },
  });

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    []
  );

  useEffect(() => {
    if (userId && !isLoadingUser) {
      void loadRuns(userId);
    }
  }, [userId, isLoadingUser, loadRuns]);

  const onSubmit = async (values: RunForm) => {
    if (userId) {
      await createRun(values, userId);
      reset();
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Run log</h2>
          <p className={styles.subtitle}>
            Manage Strava imports and manual sessions in one place.
          </p>
        </div>
        <div className={styles.actions}>
          <SecondaryButton type="button">Import from Strava</SecondaryButton>
          <PrimaryButton type="button" onClick={handleSubmit(onSubmit)}>
            Save run
          </PrimaryButton>
        </div>
      </section>

      <section className={styles.formCard}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span className={styles.label}>Date</span>
              <input
                type="date"
                className={styles.input}
                {...register("date")}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Distance (km)</span>
              <input
                type="number"
                step="0.1"
                className={styles.input}
                {...register("distance")}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Duration (min)</span>
              <input
                type="number"
                step="1"
                className={styles.input}
                {...register("duration")}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Pace (min/km)</span>
              <input
                type="number"
                step="0.1"
                className={styles.input}
                {...register("pace")}
              />
            </label>
            <label className={`${styles.field} col-span-full`}>
              <span className={styles.label}>Notes</span>
              <input
                type="text"
                placeholder="How did it feel?"
                className={styles.input}
                {...register("notes")}
              />
            </label>
          </div>
          {formState.errors && Object.values(formState.errors).length > 0 ? (
            <div className="rounded-md bg-rose-50 p-3 text-sm text-rose-600">
              {Object.values(formState.errors)
                .map((error) => error.message)
                .filter(Boolean)
                .join(" · ")}
            </div>
          ) : null}
          <div className="flex gap-3">
            <PrimaryButton type="submit" disabled={formState.isSubmitting}>
              Log run
            </PrimaryButton>
            <SecondaryButton type="button" onClick={() => reset()}>
              Reset
            </SecondaryButton>
          </div>
        </form>
      </section>

      <section className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>Date</th>
              <th className={styles.headerCell}>Distance</th>
              <th className={styles.headerCell}>Duration</th>
              <th className={styles.headerCell}>Pace</th>
              <th className={styles.headerCell}>Notes</th>
              <th
                className={`${styles.headerCell} ${styles.headerCellActions}`}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  Loading runs…
                </td>
              </tr>
            ) : runs.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  No runs logged yet.
                </td>
              </tr>
            ) : (
              runs.map((run) => (
                <tr key={run.id} className={styles.dataRow}>
                  <td className={styles.dataCell}>
                    <span className={styles.dateCell}>
                      {dateFormatter.format(new Date(run.date))}
                    </span>
                  </td>
                  <td className={styles.dataCell}>
                    <span className={styles.metric}>
                      <span className={styles.metricValue}>
                        {run.distance.toFixed(1)}
                      </span>
                      <span className={styles.metricUnit}>km</span>
                    </span>
                  </td>
                  <td className={styles.dataCell}>
                    <span className={styles.metric}>
                      <span className={styles.metricValue}>
                        {run.duration.toFixed(0)}
                      </span>
                      <span className={styles.metricUnit}>min</span>
                    </span>
                  </td>
                  <td className={styles.dataCell}>
                    <span className={styles.metricAccent}>
                      <span className={styles.metricValue}>
                        {run.pace.toFixed(1)}
                      </span>
                      <span className={styles.metricUnit}>min/km</span>
                    </span>
                  </td>
                  <td className={`${styles.dataCell} ${styles.notesCell}`}>
                    {run.notes ?? "—"}
                  </td>
                  <td className={`${styles.dataCell} ${styles.actionsCell}`}>
                    <div className={styles.rowActions}>
                      <SecondaryButton type="button" size="sm">
                        Edit
                      </SecondaryButton>
                      <SecondaryButton type="button" intent="danger" size="sm">
                        Delete
                      </SecondaryButton>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
