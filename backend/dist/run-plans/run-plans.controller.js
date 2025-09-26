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
exports.RunPlansController = void 0;
const common_1 = require("@nestjs/common");
const run_plans_service_1 = require("./run-plans.service");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
let RunPlansController = class RunPlansController {
    constructor(runPlansService) {
        this.runPlansService = runPlansService;
    }
    create(createRunPlanDto, req) {
        const userId = req.user.id;
        return this.runPlansService.create({ ...createRunPlanDto, userId });
    }
    findAll(req) {
        const userId = req.user.id;
        return this.runPlansService.findAll(userId);
    }
    findOne(id, req) {
        const userId = req.user.id;
        return this.runPlansService.findOne(+id, userId);
    }
    update(id, updateRunPlanDto, req) {
        const userId = req.user.id;
        return this.runPlansService.update(+id, userId, updateRunPlanDto);
    }
    remove(id, req) {
        const userId = req.user.id;
        return this.runPlansService.remove(+id, userId);
    }
};
exports.RunPlansController = RunPlansController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RunPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RunPlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RunPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], RunPlansController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RunPlansController.prototype, "remove", null);
exports.RunPlansController = RunPlansController = __decorate([
    (0, common_1.Controller)("run-plans"),
    (0, common_1.UseGuards)(nestjs_better_auth_1.AuthGuard),
    __metadata("design:paramtypes", [run_plans_service_1.RunPlansService])
], RunPlansController);
//# sourceMappingURL=run-plans.controller.js.map