import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { RunsService } from "src/runs/runs.service";
import { GymPlansService } from "src/gym-plans/gym-plans.service";

@Injectable()
export class StatsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly runsService: RunsService,
    private readonly gymPlansService: GymPlansService
  ) {}

  async getWeeklyStats(
    userId: number,
    weekStart?: Date
  ): Promise<{
    totalMileage: number;
    averagePace: number;
    totalWeightLifted: number;
    runCount: number;
    completedExercises: number;
  }> {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 7);

    const userRuns = await this.runsService.findAll(userId);
    const userGymPlans = await this.gymPlansService.findAll(userId);

    const weeklyRuns = userRuns.filter(
      (run) => run.date >= weekStart && run.date < weekEnd
    );

    const totalMileage = weeklyRuns.reduce((sum, run) => sum + run.distance, 0);
    const totalDuration = weeklyRuns.reduce(
      (sum, run) => sum + run.duration,
      0
    );
    const averagePace =
      weeklyRuns.length > 0 ? totalDuration / weeklyRuns.length : 0;

    const totalWeightLifted = userGymPlans.reduce(
      (sum, plan) =>
        sum +
        plan.exercises.reduce(
          (planSum, exercise) =>
            planSum +
            (exercise.completed?.reduce(
              (exerciseSum, completed) =>
                exerciseSum + completed.actualSets * completed.actualWeight,
              0
            ) || 0),
          0
        ),
      0
    );

    const completedExercises = userGymPlans.reduce(
      (sum, plan) =>
        sum +
        plan.exercises.reduce(
          (planSum, exercise) => planSum + (exercise.completed?.length || 0),
          0
        ),
      0
    );

    return {
      totalMileage,
      averagePace,
      totalWeightLifted,
      runCount: weeklyRuns.length,
      completedExercises,
    };
  }

  async getPersonalRecords(userId: number): Promise<{
    fastest5k: number | null;
    fastest10k: number | null;
    fastestMarathon: number | null;
    heaviestSquat: number | null;
    heaviestBench: number | null;
    heaviestDeadlift: number | null;
  }> {
    const userRuns = await this.runsService.findAll(userId);
    const userGymPlans = await this.gymPlansService.findAll(userId);

    // Calculate PRs from actual data
    const fiveKRuns = userRuns.filter((run) => run.distance >= 5.0);
    const tenKRuns = userRuns.filter((run) => run.distance >= 10.0);
    const marathonRuns = userRuns.filter((run) => run.distance >= 42.2);

    const fastest5k =
      fiveKRuns.length > 0
        ? Math.min(...fiveKRuns.map((run) => run.duration))
        : null;
    const fastest10k =
      tenKRuns.length > 0
        ? Math.min(...tenKRuns.map((run) => run.duration))
        : null;
    const fastestMarathon =
      marathonRuns.length > 0
        ? Math.min(...marathonRuns.map((run) => run.duration))
        : null;

    // Calculate heaviest lifts
    const squatExercises = userGymPlans.flatMap((plan) =>
      plan.exercises.filter((ex) => ex.name.toLowerCase().includes("squat"))
    );
    const benchExercises = userGymPlans.flatMap((plan) =>
      plan.exercises.filter((ex) => ex.name.toLowerCase().includes("bench"))
    );
    const deadliftExercises = userGymPlans.flatMap((plan) =>
      plan.exercises.filter((ex) => ex.name.toLowerCase().includes("deadlift"))
    );

    const heaviestSquat =
      squatExercises.length > 0
        ? Math.max(
            ...squatExercises.flatMap(
              (ex) => ex.completed?.map((c) => c.actualWeight) || [0]
            )
          )
        : null;
    const heaviestBench =
      benchExercises.length > 0
        ? Math.max(
            ...benchExercises.flatMap(
              (ex) => ex.completed?.map((c) => c.actualWeight) || [0]
            )
          )
        : null;
    const heaviestDeadlift =
      deadliftExercises.length > 0
        ? Math.max(
            ...deadliftExercises.flatMap(
              (ex) => ex.completed?.map((c) => c.actualWeight) || [0]
            )
          )
        : null;

    return {
      fastest5k,
      fastest10k,
      fastestMarathon,
      heaviestSquat,
      heaviestBench,
      heaviestDeadlift,
    };
  }

  async getCalendarView(
    userId: number,
    month?: number,
    year?: number
  ): Promise<{
    plannedWorkouts: any[];
    completedWorkouts: any[];
  }> {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const plannedRuns = await this.prisma.runPlan.findMany({
      where: {
        userId,
        week: {
          gte: Math.floor(startDate.getDate() / 7),
          lte: Math.ceil(endDate.getDate() / 7),
        },
      },
    });

    const userGymPlans = await this.gymPlansService.findAll(userId);
    const userRuns = await this.runsService.findAll(userId);

    const plannedWorkouts = [
      ...userGymPlans.map((plan) => ({
        date: new Date(year, month, plan.day),
        type: "gym",
        description: `${plan.muscleGroup} Day`,
        planId: plan.id,
      })),
      ...plannedRuns.map((plan) => ({
        date: new Date(year, month, plan.day),
        type: "run",
        description: `Planned ${plan.type} run`,
        planId: plan.id,
      })),
    ];

    const completedWorkouts = [
      ...userRuns
        .filter(
          (run) =>
            run.date.getMonth() === month && run.date.getFullYear() === year
        )
        .map((run) => ({
          date: run.date,
          type: "run",
          description: `${run.distance}K Run`,
          distance: run.distance,
          pace: run.pace,
          completed: true,
        })),
      ...userGymPlans
        .filter((plan) => {
          // Check if any exercises in this plan have been completed in the target month
          return plan.exercises.some((exercise) =>
            exercise.completed?.some(
              (completed) =>
                completed.id &&
                new Date(completed.createdAt).getMonth() === month
            )
          );
        })
        .map((plan) => ({
          date: new Date(year, month, plan.day),
          type: "gym",
          description: `${plan.muscleGroup} Day`,
          completed: true,
          planId: plan.id,
        })),
    ];

    return {
      plannedWorkouts,
      completedWorkouts,
    };
  }

  async getMonthlySummary(
    userId: number,
    month: number,
    year: number
  ): Promise<{
    totalRuns: number;
    totalDistance: number;
    totalGymSessions: number;
    totalWeightLifted: number;
    averagePace: number;
  }> {
    const userRuns = (await this.runsService.findAll(userId)).filter(
      (run) => run.date.getMonth() === month && run.date.getFullYear() === year
    );

    const userGymPlans = await this.gymPlansService.findAll(userId);

    const totalRuns = userRuns.length;
    const totalDistance = userRuns.reduce((sum, run) => sum + run.distance, 0);
    const totalDuration = userRuns.reduce((sum, run) => sum + run.duration, 0);
    const averagePace = totalRuns > 0 ? totalDuration / totalRuns : 0;

    const totalGymSessions = userGymPlans.length;

    const totalWeightLifted = userGymPlans.reduce(
      (sum, plan) =>
        sum +
        plan.exercises.reduce(
          (planSum, exercise) =>
            planSum +
            (exercise.completed?.reduce(
              (exerciseSum, completed) =>
                exerciseSum + completed.actualSets * completed.actualWeight,
              0
            ) || 0),
          0
        ),
      0
    );

    return {
      totalRuns,
      totalDistance,
      totalGymSessions,
      totalWeightLifted,
      averagePace,
    };
  }
}
