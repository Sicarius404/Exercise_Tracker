import { MainLayout } from "@/components/layout/main-layout";
import { AuthGuard } from "@/components/auth/auth-guard";
import { useRunPlans } from "@/lib/query-hooks";
import { useAuthStore } from "@/lib/auth-store";
import type { RunPlan } from "@/types/run-plans";
import { useMemo } from "react";
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export default function PlanPage() {
  const { user } = useAuthStore();
  const {
    data: runPlans = [],
    isLoading,
    isError,
  } = useRunPlans(user?.id ?? 1);

  const weeklyPlan = useMemo(() => groupPlansByDay(runPlans), [runPlans]);

  return (
    <AuthGuard>
      <MainLayout>
        <section className="space-y-6">
          <header className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-white">Training Plan</h1>
            <p className="text-sm text-zinc-400">
              Overview of scheduled runs for the current training cycle.
            </p>
          </header>

          {isLoading && (
            <p className="text-sm text-zinc-400">Loading plans...</p>
          )}
          {isError && (
            <p className="text-sm text-red-400">
              Unable to load plans right now.
            </p>
          )}

          <div className="grid gap-4 md:grid-cols-7">
            {DAYS.map((dayLabel, index) => {
              const dayPlans = weeklyPlan.get(index + 1) ?? [];
              return (
                <article
                  key={dayLabel}
                  className="min-h-[180px] rounded-lg border border-zinc-800 bg-zinc-900/60 p-4"
                >
                  <p className="text-sm font-semibold text-white">{dayLabel}</p>
                  <div className="mt-3 space-y-3">
                    {dayPlans.length === 0 && (
                      <p className="text-xs text-zinc-500">Rest day</p>
                    )}
                    {dayPlans.map((plan) => (
                      <PlanCard key={plan.id} plan={plan} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </MainLayout>
    </AuthGuard>
  );
}

function groupPlansByDay(plans: RunPlan[]) {
  return plans.reduce<Map<number, RunPlan[]>>((acc, plan) => {
    const existing = acc.get(plan.day) ?? [];
    acc.set(plan.day, [...existing, plan]);
    return acc;
  }, new Map());
}

interface PlanCardProps {
  readonly plan: RunPlan;
}

function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-900/80 p-3">
      <p className="text-sm font-medium text-white">{plan.type}</p>
      {plan.plannedDistance && (
        <p className="text-xs text-zinc-400">
          Distance: {plan.plannedDistance.toFixed(1)} km
        </p>
      )}
      {plan.plannedTime && (
        <p className="text-xs text-zinc-400">
          Time: {plan.plannedTime.toFixed(0)} min
        </p>
      )}
    </div>
  );
}
