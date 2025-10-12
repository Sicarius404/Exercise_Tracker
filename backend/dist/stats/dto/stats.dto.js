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
exports.GetDashboardDataDto = exports.GetMonthlySummaryDto = exports.GetCalendarViewDto = exports.GetPersonalRecordsDto = exports.GetWeeklyStatsDto = void 0;
const class_validator_1 = require("class-validator");
class GetWeeklyStatsDto {
}
exports.GetWeeklyStatsDto = GetWeeklyStatsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetWeeklyStatsDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetWeeklyStatsDto.prototype, "weekStart", void 0);
class GetPersonalRecordsDto {
}
exports.GetPersonalRecordsDto = GetPersonalRecordsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetPersonalRecordsDto.prototype, "userId", void 0);
class GetCalendarViewDto {
}
exports.GetCalendarViewDto = GetCalendarViewDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetCalendarViewDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], GetCalendarViewDto.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(2010),
    (0, class_validator_1.Max)(2030),
    __metadata("design:type", Number)
], GetCalendarViewDto.prototype, "year", void 0);
class GetMonthlySummaryDto {
}
exports.GetMonthlySummaryDto = GetMonthlySummaryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetMonthlySummaryDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], GetMonthlySummaryDto.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(2010),
    (0, class_validator_1.Max)(2030),
    __metadata("design:type", Number)
], GetMonthlySummaryDto.prototype, "year", void 0);
class GetDashboardDataDto {
}
exports.GetDashboardDataDto = GetDashboardDataDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetDashboardDataDto.prototype, "userId", void 0);
//# sourceMappingURL=stats.dto.js.map