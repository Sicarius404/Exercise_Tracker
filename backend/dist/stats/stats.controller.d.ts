import { StatsService } from "./stats.service";
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    getWeeklyStats(userId: string, weekStart?: string): Promise<{
        totalMileage: number;
        averagePace: number;
        totalWeightLifted: number;
        runCount: number;
        completedExercises: number;
    }>;
    getPersonalRecords(userId: string): Promise<{
        fastest5k: number | null;
        fastest10k: number | null;
        fastestMarathon: number | null;
        heaviestSquat: number | null;
        heaviestBench: number | null;
        heaviestDeadlift: number | null;
    }>;
    getCalendarView(userId: string, month?: string, year?: string): Promise<{
        plannedWorkouts: any[];
        completedWorkouts: any[];
    }>;
    getMonthlySummary(userId: string, month: string, year: string): Promise<{
        totalRuns: number;
        totalDistance: number;
        totalGymSessions: number;
        totalWeightLifted: number;
        averagePace: number;
    }>;
    getDashboardData(userId: string): Promise<{
        weeklyStats: {
            totalMileage: number;
            averagePace: number;
            totalWeightLifted: number;
            runCount: number;
            completedExercises: number;
        };
        personalRecords: {
            fastest5k: number | null;
            fastest10k: number | null;
            fastestMarathon: number | null;
            heaviestSquat: number | null;
            heaviestBench: number | null;
            heaviestDeadlift: number | null;
        };
        calendarView: {
            plannedWorkouts: any[];
            completedWorkouts: any[];
        };
    }>;
}
