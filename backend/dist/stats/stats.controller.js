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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsController = void 0;
const common_1 = require("@nestjs/common");
const stats_service_1 = require("./stats.service");
const stats_dto_1 = require("./dto/stats.dto");
let StatsController = class StatsController {
    constructor(statsService) {
        this.statsService = statsService;
    }
    async getWeeklyStats(getWeeklyStatsDto) {
        const weekStartDate = getWeeklyStatsDto.weekStart
            ? new Date(getWeeklyStatsDto.weekStart)
            : undefined;
        return this.statsService.getWeeklyStats(getWeeklyStatsDto.userId, weekStartDate);
    }
    async getPersonalRecords(getPersonalRecordsDto) {
        return this.statsService.getPersonalRecords(getPersonalRecordsDto.userId);
    }
    async getCalendarView(getCalendarViewDto) {
        return this.statsService.getCalendarView(getCalendarViewDto.userId, getCalendarViewDto.month, getCalendarViewDto.year);
    }
    async getMonthlySummary(getMonthlySummaryDto) {
        return this.statsService.getMonthlySummary(getMonthlySummaryDto.userId, getMonthlySummaryDto.month, getMonthlySummaryDto.year);
    }
    async getDashboardData(getDashboardDataDto) {
        const [weeklyStats, personalRecords, calendarView] = await Promise.all([
            this.statsService.getWeeklyStats(getDashboardDataDto.userId),
            this.statsService.getPersonalRecords(getDashboardDataDto.userId),
            this.statsService.getCalendarView(getDashboardDataDto.userId),
        ]);
        return {
            weeklyStats,
            personalRecords,
            calendarView,
        };
    }
};
exports.StatsController = StatsController;
__decorate([
    (0, common_1.Get)("weekly"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stats_dto_1.GetWeeklyStatsDto]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getWeeklyStats", null);
__decorate([
    (0, common_1.Get)("personal-records"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stats_dto_1.GetPersonalRecordsDto]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getPersonalRecords", null);
__decorate([
    (0, common_1.Get)("calendar"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stats_dto_1.GetCalendarViewDto]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getCalendarView", null);
__decorate([
    (0, common_1.Get)("monthly"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stats_dto_1.GetMonthlySummaryDto]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getMonthlySummary", null);
__decorate([
    (0, common_1.Get)("dashboard"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stats_dto_1.GetDashboardDataDto]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getDashboardData", null);
exports.StatsController = StatsController = __decorate([
    (0, common_1.Controller)("stats"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    })),
    __metadata("design:paramtypes", [stats_service_1.StatsService])
], StatsController);
//# sourceMappingURL=stats.controller.js.map