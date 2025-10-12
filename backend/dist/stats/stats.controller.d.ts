import { StatsService } from "./stats.service";
import { GetWeeklyStatsDto, GetPersonalRecordsDto, GetCalendarViewDto, GetMonthlySummaryDto, GetDashboardDataDto } from "./dto/stats.dto";
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    getWeeklyStats(getWeeklyStatsDto: GetWeeklyStatsDto): Promise<{
        totalMileage: number;
        averagePace: number;
        totalWeightLifted: number;
        runCount: number;
        completedExercises: number;
    }>;
    getPersonalRecords(getPersonalRecordsDto: GetPersonalRecordsDto): Promise<{
        fastest5k: number | null;
        fastest10k: number | null;
        fastestMarathon: number | null;
        heaviestSquat: number | null;
        heaviestBench: number | null;
        heaviestDeadlift: number | null;
    }>;
    getCalendarView(getCalendarViewDto: GetCalendarViewDto): Promise<{
        plannedWorkouts: any[];
        completedWorkouts: any[];
    }>;
    getMonthlySummary(getMonthlySummaryDto: GetMonthlySummaryDto): Promise<{
        totalRuns: number;
        totalDistance: number;
        totalGymSessions: number;
        totalWeightLifted: number;
        averagePace: number;
    }>;
    getDashboardData(getDashboardDataDto: GetDashboardDataDto): Promise<{
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
