import { PrismaService } from "src/database/prisma.service";
import { RunsService } from "src/runs/runs.service";
import { GymPlansService } from "src/gym-plans/gym-plans.service";
export declare class StatsService {
    private readonly prisma;
    private readonly runsService;
    private readonly gymPlansService;
    constructor(prisma: PrismaService, runsService: RunsService, gymPlansService: GymPlansService);
    getWeeklyStats(userId: number, weekStart?: Date): Promise<{
        totalMileage: number;
        averagePace: number;
        totalWeightLifted: number;
        runCount: number;
        completedExercises: number;
    }>;
    getPersonalRecords(userId: number): Promise<{
        fastest5k: number | null;
        fastest10k: number | null;
        fastestMarathon: number | null;
        heaviestSquat: number | null;
        heaviestBench: number | null;
        heaviestDeadlift: number | null;
    }>;
    getCalendarView(userId: number, month?: number, year?: number): Promise<{
        plannedWorkouts: any[];
        completedWorkouts: any[];
    }>;
    getMonthlySummary(userId: number, month: number, year: number): Promise<{
        totalRuns: number;
        totalDistance: number;
        totalGymSessions: number;
        totalWeightLifted: number;
        averagePace: number;
    }>;
}
