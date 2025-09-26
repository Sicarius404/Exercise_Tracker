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
exports.GymPlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const client_1 = require("@prisma/client");
const gymPlanWithExercises = client_1.Prisma.validator()({
    include: { exercises: { include: { completed: true } } },
});
let GymPlansService = class GymPlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(gymPlanData) {
        return this.prisma.gymPlan.create({
            data: {
                ...gymPlanData,
                exercises: {
                    create: gymPlanData.exercises,
                },
            },
            include: {
                exercises: true,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.gymPlan.findMany({
            where: { userId },
            include: { exercises: { include: { completed: true } } },
        });
    }
    async findOne(id, userId) {
        return this.prisma.gymPlan.findUnique({
            where: { id, userId },
            include: { exercises: { include: { completed: true } } },
        });
    }
    async update(id, userId, updateData) {
        const existingPlan = await this.prisma.gymPlan.findUnique({
            where: { id, userId },
        });
        if (!existingPlan) {
            return null;
        }
        return this.prisma.gymPlan.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id, userId) {
        const existingPlan = await this.prisma.gymPlan.findUnique({
            where: { id, userId },
        });
        if (!existingPlan) {
            return false;
        }
        await this.prisma.gymPlan.delete({ where: { id } });
        return true;
    }
    async addExercise(gymPlanId, userId, exerciseData) {
        const plan = await this.prisma.gymPlan.findUnique({
            where: { id: gymPlanId, userId },
        });
        if (!plan) {
            return null;
        }
        return this.prisma.exercise.create({
            data: { ...exerciseData, gymPlanId },
        });
    }
    async updateExercise(exerciseId, userId, updateData) {
        const exercise = await this.prisma.exercise.findUnique({
            where: { id: exerciseId },
            include: { gymPlan: true },
        });
        if (!exercise || exercise.gymPlan.userId !== userId) {
            return null;
        }
        return this.prisma.exercise.update({
            where: { id: exerciseId },
            data: updateData,
        });
    }
    async removeExercise(exerciseId, userId) {
        const exercise = await this.prisma.exercise.findUnique({
            where: { id: exerciseId },
            include: { gymPlan: true },
        });
        if (!exercise || exercise.gymPlan.userId !== userId) {
            return false;
        }
        await this.prisma.exercise.delete({ where: { id: exerciseId } });
        return true;
    }
    async completeExercise(exerciseId, userId, completedData) {
        const exercise = await this.prisma.exercise.findUnique({
            where: { id: exerciseId },
            include: { gymPlan: true },
        });
        if (!exercise || exercise.gymPlan.userId !== userId) {
            return null;
        }
        return this.prisma.completedExercise.create({
            data: { ...completedData, exerciseId },
        });
    }
};
exports.GymPlansService = GymPlansService;
exports.GymPlansService = GymPlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GymPlansService);
//# sourceMappingURL=gym-plans.service.js.map