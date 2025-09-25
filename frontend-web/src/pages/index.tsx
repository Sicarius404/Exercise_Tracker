import { MainLayout } from "@/components/layout/main-layout";
import { AuthGuard } from "@/components/auth/auth-guard";
import { useDashboard } from "@/lib/query-hooks";
import { useAuthStore } from "@/lib/auth-store";

export default function HomePage() {
  const { user } = useAuthStore();
  const { data, isLoading, isError } = useDashboard(user?.id ?? 1);

  const weeklyStats = data?.weeklyStats;
  const personalRecords = data?.personalRecords;
  const plannedWorkouts = data?.calendarView?.plannedWorkouts ?? [];
  const completedWorkouts = data?.calendarView?.completedWorkouts ?? [];

  const completedLookup = new Set(
    completedWorkouts.map(
      (item) => `${item.date}-${item.description}-${item.type}`
    )
  );

  const calendarItems =
    plannedWorkouts.length || completedWorkouts.length
      ? [...plannedWorkouts, ...completedWorkouts].map((item) => ({
          ...item,
          isCompleted: completedLookup.has(
            `${item.date}-${item.description}-${item.type}`
          ),
        }))
      : [];

  if (isLoading) {
    return (
      <AuthGuard>
        <MainLayout>
          <p className="text-sm text-zinc-400">Loading dashboard...</p>
        </MainLayout>
      </AuthGuard>
    );
  }

  if (isError || !data || !weeklyStats || !personalRecords) {
    return (
      <AuthGuard>
        <MainLayout>
          <p className="text-sm text-red-400">Failed to load dashboard data.</p>
        </MainLayout>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <MainLayout>
        <div className="space-y-10">
          <section className="grid gap-4 md:grid-cols-4">
            <StatCard
              title="Total Mileage"
              value={`${weeklyStats.totalMileage.toFixed(1)} km`}
            />
            <StatCard
              title="Average Pace"
              value={`${weeklyStats.averagePace.toFixed(2)} min/km`}
            />
            <StatCard
              title="Total Weight"
              value={`${weeklyStats.totalWeightLifted.toFixed(0)} kg`}
            />
            <StatCard
              title="Runs Completed"
              value={weeklyStats.runCount.toString()}
            />
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <PRCard
              title="Fastest 5K"
              value={formatMinutes(personalRecords.fastest5k)}
            />
            <PRCard
              title="Fastest 10K"
              value={formatMinutes(personalRecords.fastest10k)}
            />
            <PRCard
              title="Fastest Marathon"
              value={formatMinutes(personalRecords.fastestMarathon)}
            />
            <PRCard
              title="Heaviest Squat"
              value={formatWeight(personalRecords.heaviestSquat)}
            />
            <PRCard
              title="Heaviest Bench"
              value={formatWeight(personalRecords.heaviestBench)}
            />
            <PRCard
              title="Heaviest Deadlift"
              value={formatWeight(personalRecords.heaviestDeadlift)}
            />
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Upcoming & Completed Workouts
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {calendarItems.map((item) => (
                <article
                  key={`${item.date}-${item.description}`}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4"
                >
                  <p className="text-sm text-zinc-400">
                    {new Date(item.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-base font-medium text-white">
                    {item.description}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {item.type.toUpperCase()}
                  </p>
                  {item.distance && (
                    <p className="text-sm text-zinc-300">
                      Distance: {item.distance} km
                    </p>
                  )}
                  {item.pace && (
                    <p className="text-sm text-zinc-300">
                      Pace: {item.pace.toFixed(2)} min/km
                    </p>
                  )}
                  <p className="text-xs font-semibold text-emerald-400">
                    {item.completed || item.isCompleted
                      ? "Completed"
                      : "Planned"}
                  </p>
                </article>
              ))}
              {calendarItems.length === 0 && (
                <p className="text-sm text-zinc-400">
                  No workouts scheduled yet.
                </p>
              )}
            </div>
          </section>
        </div>
      </MainLayout>
    </AuthGuard>
  );
}

interface StatCardProps {
  readonly title: string;
  readonly value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {title}
      </p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </article>
  );
}

function PRCard({ title, value }: StatCardProps) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {title}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </article>
  );
}

function formatMinutes(minutes: number | null): string {
  if (minutes === null) return "—";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${remainingMinutes.toFixed(0)}m`;
  }
  return `${remainingMinutes.toFixed(0)} min`;
}

function formatWeight(weight: number | null): string {
  if (weight === null) return "—";
  return `${weight.toFixed(0)} kg`;
}
