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
exports.GymPlansController = void 0;
const common_1 = require("@nestjs/common");
const gym_plans_service_1 = require("./gym-plans.service");
const nestjs_better_auth_1 = require("@thallesp/nestjs-better-auth");
let GymPlansController = class GymPlansController {
    constructor(gymPlansService) {
        this.gymPlansService = gymPlansService;
    }
    create(createGymPlanDto, req) {
        const userId = req.user.id;
        return this.gymPlansService.create({ ...createGymPlanDto, userId });
    }
    findAll(req) {
        const userId = req.user.id;
        return this.gymPlansService.findAll(userId);
    }
    findOne(id, req) {
        const userId = req.user.id;
        return this.gymPlansService.findOne(+id, userId);
    }
    update(id, updateGymPlanDto, req) {
        const userId = req.user.id;
        return this.gymPlansService.update(+id, userId, updateGymPlanDto);
    }
    remove(id, req) {
        const userId = req.user.id;
        return this.gymPlansService.remove(+id, userId);
    }
    addExercise(gymPlanId, exerciseData, req) {
        const userId = req.user.id;
        return this.gymPlansService.addExercise(+gymPlanId, userId, exerciseData);
    }
    updateExercise(exerciseId, updateData, req) {
        const userId = req.user.id;
        return this.gymPlansService.updateExercise(+exerciseId, userId, updateData);
    }
    removeExercise(exerciseId, req) {
        const userId = req.user.id;
        return this.gymPlansService.removeExercise(+exerciseId, userId);
    }
    completeExercise(exerciseId, completedData, req) {
        const userId = req.user.id;
        return this.gymPlansService.completeExercise(+exerciseId, userId, completedData);
    }
};
exports.GymPlansController = GymPlansController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(":id/exercises"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "addExercise", null);
__decorate([
    (0, common_1.Patch)("exercises/:exerciseId"),
    __param(0, (0, common_1.Param)("exerciseId")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "updateExercise", null);
__decorate([
    (0, common_1.Delete)("exercises/:exerciseId"),
    __param(0, (0, common_1.Param)("exerciseId")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "removeExercise", null);
__decorate([
    (0, common_1.Post)("exercises/:exerciseId/complete"),
    __param(0, (0, common_1.Param)("exerciseId")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], GymPlansController.prototype, "completeExercise", null);
exports.GymPlansController = GymPlansController = __decorate([
    (0, common_1.Controller)("gym-plans"),
    (0, common_1.UseGuards)(nestjs_better_auth_1.AuthGuard),
    __metadata("design:paramtypes", [gym_plans_service_1.GymPlansService])
], GymPlansController);
//# sourceMappingURL=gym-plans.controller.js.map