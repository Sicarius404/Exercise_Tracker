"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const runs_service_1 = require("../runs/runs.service");
const gym_plans_service_1 = require("../gym-plans/gym-plans.service");
let StatsService = class StatsService {
    constructor(prisma, runsService, gymPlansService) {
        this.prisma = prisma;
        this.runsService = runsService;
        this.gymPlansService = gymPlansService;
    }
    async getWeeklyStats(userId, weekStart) {
        const today = new Date();
        const startDate = weekStart ?? new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const endDate = weekStart ? new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000) : today;
        const userRuns = await this.runsService.findAll(userId);
        const userGymPlans = await this.gymPlansService.findAll(userId);
        const weeklyRuns = userRuns.filter((run) => run.date >= startDate && run.date <= endDate);
        const totalMileage = weeklyRuns.reduce((sum, run) => sum + run.distance, 0);
        const totalDuration = weeklyRuns.reduce((sum, run) => sum + run.duration, 0);
        const averagePace = weeklyRuns.length > 0 ? totalDuration / weeklyRuns.length : 0;
        const totalWeightLifted = userGymPlans.reduce((sum, plan) => sum +
            plan.exercises.reduce((planSum, exercise) => planSum +
                (exercise.completed?.reduce((exerciseSum, completed) => exerciseSum + completed.actualSets * completed.actualWeight, 0) || 0), 0), 0);
        const completedExercises = userGymPlans.reduce((sum, plan) => sum +
            plan.exercises.reduce((planSum, exercise) => planSum + (exercise.completed?.length || 0), 0), 0);
        return {
            totalMileage,
            averagePace,
            totalWeightLifted,
            runCount: weeklyRuns.length,
            completedExercises,
        };
    }
    async getPersonalRecords(userId) {
        const userRuns = await this.runsService.findAll(userId);
        const userGymPlans = await this.gymPlansService.findAll(userId);
        const fiveKRuns = userRuns.filter((run) => run.distance >= 5.0);
        const tenKRuns = userRuns.filter((run) => run.distance >= 10.0);
        const marathonRuns = userRuns.filter((run) => run.distance >= 42.2);
        const fastest5k = fiveKRuns.length > 0
            ? Math.min(...fiveKRuns.map((run) => run.duration))
            : null;
        const fastest10k = tenKRuns.length > 0
            ? Math.min(...tenKRuns.map((run) => run.duration))
            : null;
        const fastestMarathon = marathonRuns.length > 0
            ? Math.min(...marathonRuns.map((run) => run.duration))
            : null;
        const squatExercises = userGymPlans.flatMap((plan) => plan.exercises.filter((ex) => ex.name.toLowerCase().includes("squat")));
        const benchExercises = userGymPlans.flatMap((plan) => plan.exercises.filter((ex) => ex.name.toLowerCase().includes("bench")));
        const deadliftExercises = userGymPlans.flatMap((plan) => plan.exercises.filter((ex) => ex.name.toLowerCase().includes("deadlift")));
        const heaviestSquat = squatExercises.length > 0
            ? Math.max(...squatExercises.flatMap((ex) => ex.completed?.map((c) => c.actualWeight) || [0]))
            : null;
        const heaviestBench = benchExercises.length > 0
            ? Math.max(...benchExercises.flatMap((ex) => ex.completed?.map((c) => c.actualWeight) || [0]))
            : null;
        const heaviestDeadlift = deadliftExercises.length > 0
            ? Math.max(...deadliftExercises.flatMap((ex) => ex.completed?.map((c) => c.actualWeight) || [0]))
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
    async getCalendarView(userId, month = new Date().getMonth(), year = new Date().getFullYear()) {
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
                .filter((run) => run.date.getMonth() === month && run.date.getFullYear() === year)
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
                return plan.exercises.some((exercise) => exercise.completed?.some((completed) => completed.id &&
                    new Date(completed.createdAt).getMonth() === month));
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
    async getMonthlySummary(userId, month, year) {
        const userRuns = (await this.runsService.findAll(userId)).filter((run) => run.date.getMonth() === month && run.date.getFullYear() === year);
        const userGymPlans = await this.gymPlansService.findAll(userId);
        const totalRuns = userRuns.length;
        const totalDistance = userRuns.reduce((sum, run) => sum + run.distance, 0);
        const totalDuration = userRuns.reduce((sum, run) => sum + run.duration, 0);
        const averagePace = totalDistance > 0 ? totalDuration / totalDistance : 0;
        const totalGymSessions = userGymPlans.length;
        const totalWeightLifted = userGymPlans.reduce((sum, plan) => sum +
            plan.exercises.reduce((planSum, exercise) => planSum +
                (exercise.completed?.reduce((exerciseSum, completed) => exerciseSum + completed.actualSets * completed.actualWeight, 0) || 0), 0), 0);
        return {
            totalRuns,
            totalDistance,
            totalGymSessions,
            totalWeightLifted,
            averagePace,
        };
    }
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        runs_service_1.RunsService,
        gym_plans_service_1.GymPlansService])
], StatsService);
//# sourceMappingURL=stats.service.js.map