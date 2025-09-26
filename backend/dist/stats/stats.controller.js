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
let StatsController = class StatsController {
    constructor(statsService) {
        this.statsService = statsService;
    }
    async getWeeklyStats(userId, weekStart) {
        const weekStartDate = weekStart ? new Date(weekStart) : undefined;
        return this.statsService.getWeeklyStats(parseInt(userId), weekStartDate);
    }
    async getPersonalRecords(userId) {
        return this.statsService.getPersonalRecords(parseInt(userId));
    }
    async getCalendarView(userId, month, year) {
        return this.statsService.getCalendarView(parseInt(userId), month ? parseInt(month) : undefined, year ? parseInt(year) : undefined);
    }
    async getMonthlySummary(userId, month, year) {
        return this.statsService.getMonthlySummary(parseInt(userId), parseInt(month), parseInt(year));
    }
    async getDashboardData(userId) {
        const [weeklyStats, personalRecords, calendarView] = await Promise.all([
            this.statsService.getWeeklyStats(parseInt(userId)),
            this.statsService.getPersonalRecords(parseInt(userId)),
            this.statsService.getCalendarView(parseInt(userId)),
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
    __param(0, (0, common_1.Query)("userId")),
    __param(1, (0, common_1.Query)("weekStart")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getWeeklyStats", null);
__decorate([
    (0, common_1.Get)("personal-records"),
    __param(0, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getPersonalRecords", null);
__decorate([
    (0, common_1.Get)("calendar"),
    __param(0, (0, common_1.Query)("userId")),
    __param(1, (0, common_1.Query)("month")),
    __param(2, (0, common_1.Query)("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getCalendarView", null);
__decorate([
    (0, common_1.Get)("monthly"),
    __param(0, (0, common_1.Query)("userId")),
    __param(1, (0, common_1.Query)("month")),
    __param(2, (0, common_1.Query)("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getMonthlySummary", null);
__decorate([
    (0, common_1.Get)("dashboard"),
    __param(0, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatsController.prototype, "getDashboardData", null);
exports.StatsController = StatsController = __decorate([
    (0, common_1.Controller)("stats"),
    __metadata("design:paramtypes", [stats_service_1.StatsService])
], StatsController);
//# sourceMappingURL=stats.controller.js.map