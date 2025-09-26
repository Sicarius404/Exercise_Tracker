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
exports.RunsController = void 0;
const common_1 = require("@nestjs/common");
const runs_service_1 = require("./runs.service");
let RunsController = class RunsController {
    constructor(runsService) {
        this.runsService = runsService;
    }
    async create(createRunDto) {
        const runData = {
            ...createRunDto,
            date: new Date(createRunDto.date),
        };
        return this.runsService.create(runData);
    }
    async findAll(userId) {
        return this.runsService.findAll(parseInt(userId));
    }
    async findOne(id, userId) {
        return this.runsService.findOne(parseInt(id), parseInt(userId));
    }
    async update(id, userId, updateRunDto) {
        const updateData = {
            ...updateRunDto,
            ...(updateRunDto.date && { date: new Date(updateRunDto.date) }),
        };
        return this.runsService.update(parseInt(id), parseInt(userId), updateData);
    }
    async remove(id, userId) {
        return this.runsService.remove(parseInt(id), parseInt(userId));
    }
    async findByStravaId(stravaId) {
        return this.runsService.findByStravaId(stravaId);
    }
};
exports.RunsController = RunsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("userId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("strava/:stravaId"),
    __param(0, (0, common_1.Param)("stravaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RunsController.prototype, "findByStravaId", null);
exports.RunsController = RunsController = __decorate([
    (0, common_1.Controller)("runs"),
    __metadata("design:paramtypes", [runs_service_1.RunsService])
], RunsController);
//# sourceMappingURL=runs.controller.js.map