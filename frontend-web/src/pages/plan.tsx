import { MainLayout } from "@/components/layout/main-layout";
import { AuthGuard } from "@/components/auth/auth-guard";
import { useCreateRunPlan, useRunPlans } from "@/lib/query-hooks";
import { useAuthStore } from "@/lib/auth-store";
import type { RunPlan } from "@/types/run-plans";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateRunPlanSchema } from "@/schema/run-plan";
import type { CreateRunPlanInput } from "@/types/run-plans";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export default function PlanPage() {
  const { user } = useAuthStore();
  const userId = user?.id ?? 0;
  const { data: runPlans = [], isLoading, isError } = useRunPlans(userId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const createRunPlan = useCreateRunPlan(userId);

  const form = useForm<CreateRunPlanInput>({
    resolver: zodResolver(CreateRunPlanSchema),
    defaultValues: {
      week: 1,
      day: 1,
      type: "Easy Run",
      plannedDistance: undefined,
      plannedTime: undefined,
    },
  });

  const weeklyPlan = useMemo(() => groupPlansByDay(runPlans), [runPlans]);

  const handleSubmit = form.handleSubmit(async (values) => {
    if (!userId) {
      toast.error("You must be logged in to create a plan");
      return;
    }
    try {
      await createRunPlan.mutateAsync(values);
      toast.success("Training plan added");
      setIsDialogOpen(false);
      form.reset();
    } catch (error) {
      toast.error("Could not create plan", {
        description: error instanceof Error ? error.message : undefined,
      });
    }
  });

  return (
    <AuthGuard>
      <MainLayout>
        <section className="space-y-6">
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-white">
                Training Plan
              </h1>
              <p className="text-sm text-zinc-400">
                Structure your week with targeted sessions and watch your
                progress unfold.
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Add Run Plan</Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Create Run Plan</DialogTitle>
                  <DialogDescription>
                    Define the key details for your upcoming workout. All fields
                    are required unless marked optional.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="week">Week</Label>
                      <Input
                        id="week"
                        type="number"
                        min={1}
                        {...form.register("week", { valueAsNumber: true })}
                      />
                      {form.formState.errors.week && (
                        <p className="text-xs text-red-400">
                          {form.formState.errors.week.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="day">Day</Label>
                      <Select
                        value={String(form.watch("day"))}
                        onValueChange={(value) =>
                          form.setValue("day", Number(value))
                        }
                      >
                        <SelectTrigger id="day">
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                        <SelectContent>
                          {DAYS.map((label, index) => (
                            <SelectItem key={label} value={String(index + 1)}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="type">Session Type</Label>
                    <Input
                      id="type"
                      {...form.register("type")}
                      placeholder="Tempo Run"
                    />
                    {form.formState.errors.type && (
                      <p className="text-xs text-red-400">
                        {form.formState.errors.type.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="distance">Distance (km)</Label>
                      <Input
                        id="distance"
                        type="number"
                        step="0.1"
                        min={0}
                        {...form.register("plannedDistance", {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Duration (minutes)</Label>
                      <Input
                        id="time"
                        type="number"
                        step="1"
                        min={0}
                        {...form.register("plannedTime", {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={createRunPlan.isPending}>
                      {createRunPlan.isPending ? "Saving..." : "Save Plan"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </header>

          {isLoading && (
            <p className="text-sm text-zinc-400">Loading plans...</p>
          )}
          {isError && (
            <p className="text-sm text-red-400">
              Unable to load plans right now.
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-7">
            {DAYS.map((dayLabel, index) => {
              const dayPlans = weeklyPlan.get(index + 1) ?? [];
              return (
                <article
                  key={dayLabel}
                  className="min-h-[220px] rounded-2xl border border-zinc-900/60 bg-zinc-900/50 p-5 shadow-inner"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                    {dayLabel}
                  </p>
                  <div className="mt-4 space-y-3">
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
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{plan.type}</p>
        <span className="text-xs text-zinc-500">Week {plan.week}</span>
      </div>
      <div className="mt-3 space-y-1 text-xs text-zinc-400">
        {plan.plannedDistance && (
          <p>
            Distance:{" "}
            <span className="text-white">
              {plan.plannedDistance.toFixed(1)} km
            </span>
          </p>
        )}
        {plan.plannedTime && (
          <p>
            Duration:{" "}
            <span className="text-white">
              {plan.plannedTime.toFixed(0)} min
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
