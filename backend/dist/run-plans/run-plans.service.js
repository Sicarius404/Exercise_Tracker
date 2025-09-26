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
exports.RunPlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let RunPlansService = class RunPlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(runPlanData) {
        return this.prisma.runPlan.create({ data: runPlanData });
    }
    async findAll(userId) {
        return this.prisma.runPlan.findMany({ where: { userId } });
    }
    async findOne(id, userId) {
        return this.prisma.runPlan.findUnique({ where: { id, userId } });
    }
    async update(id, userId, updateData) {
        const existingRunPlan = await this.prisma.runPlan.findUnique({
            where: { id, userId },
        });
        if (!existingRunPlan) {
            return null;
        }
        return this.prisma.runPlan.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id, userId) {
        const existingRunPlan = await this.prisma.runPlan.findUnique({
            where: { id, userId },
        });
        if (!existingRunPlan) {
            return false;
        }
        await this.prisma.runPlan.delete({ where: { id } });
        return true;
    }
};
exports.RunPlansService = RunPlansService;
exports.RunPlansService = RunPlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RunPlansService);
//# sourceMappingURL=run-plans.service.js.map