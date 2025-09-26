import { MainLayout } from "@/components/layout/main-layout";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RunForm } from "@/components/forms/run-form";
import { useRuns } from "@/lib/query-hooks";
import { useAuthStore } from "@/lib/auth-store";
import type { Run } from "@/types/runs";
import { useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { runsKeys } from "@/lib/query-hooks";

export default function RunsPage() {
  const { user } = useAuthStore();
  const { data: runs = [], isLoading, isError } = useRuns(user?.id ?? 1);
  const [filter, setFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();

  const filteredRuns = useMemo(() => {
    if (filter === "all") return runs;
    if (filter === "recent") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return runs.filter((run) => new Date(run.date) >= thirtyDaysAgo);
    }
    if (filter === "long") {
      return runs.filter((run) => run.distance >= 10);
    }
    return runs;
  }, [runs, filter]);

  const handleRunSaved = () => {
    setIsDialogOpen(false);
    if (user) {
      queryClient.invalidateQueries({ queryKey: runsKeys.user(user.id) });
    }
  };

  return (
    <AuthGuard>
      <MainLayout>
        <section className="space-y-6">
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-white">Runs</h1>
              <p className="text-sm text-zinc-400">
                Track your past runs and analyze performance trends.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex gap-2 text-xs">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFilter(option.value)}
                    className={`rounded-full border border-zinc-700 px-4 py-2 transition ${
                      filter === option.value
                        ? "bg-white text-zinc-900 shadow"
                        : "bg-zinc-900 text-zinc-300 hover:border-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Add Run</Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Run</DialogTitle>
                    <DialogDescription>
                      Capture pace, distance, and how you felt after finishing.
                    </DialogDescription>
                  </DialogHeader>
                  <RunForm
                    onSuccess={handleRunSaved}
                    onCancel={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </header>

          {isLoading && (
            <p className="text-sm text-zinc-400">Loading runs...</p>
          )}
          {isError && (
            <p className="text-sm text-red-400">
              Unable to load runs right now.
            </p>
          )}
          {!isLoading && !isError && filteredRuns.length === 0 && (
            <p className="text-sm text-zinc-400">
              No runs found for this filter.
            </p>
          )}

          <div className="overflow-hidden rounded-2xl border border-zinc-900/60 bg-zinc-950/60">
            <table className="min-w-full divide-y divide-zinc-900">
              <thead className="bg-zinc-900/60 text-xs uppercase tracking-wide text-zinc-500">
                <tr>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Distance (km)</th>
                  <th className="px-4 py-3 text-left">Duration (min)</th>
                  <th className="px-4 py-3 text-left">Pace (min/km)</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-sm text-zinc-300">
                {filteredRuns.map((run) => (
                  <RunRow key={run.id} run={run} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </MainLayout>
    </AuthGuard>
  );
}

const filterOptions = [
  { value: "all", label: "All" },
  { value: "recent", label: "Last 30 Days" },
  { value: "long", label: "Long Runs" },
] as const;

interface RunRowProps {
  readonly run: Run;
}

function RunRow({ run }: RunRowProps) {
  const date = new Date(run.date).toLocaleDateString();
  return (
    <tr className="hover:bg-zinc-900/40">
      <td className="whitespace-nowrap px-4 py-3 text-white">{date}</td>
      <td className="px-4 py-3">{run.distance.toFixed(1)}</td>
      <td className="px-4 py-3">{run.duration.toFixed(1)}</td>
      <td className="px-4 py-3">{run.pace.toFixed(2)}</td>
      <td className="px-4 py-3 text-zinc-500">{run.notes ?? "—"}</td>
    </tr>
  );
}
