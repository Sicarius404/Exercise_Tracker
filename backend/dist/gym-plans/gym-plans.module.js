"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GymPlansModule = void 0;
const common_1 = require("@nestjs/common");
const gym_plans_service_1 = require("./gym-plans.service");
const gym_plans_controller_1 = require("./gym-plans.controller");
const prisma_module_1 = require("../database/prisma.module");
let GymPlansModule = class GymPlansModule {
};
exports.GymPlansModule = GymPlansModule;
exports.GymPlansModule = GymPlansModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [gym_plans_controller_1.GymPlansController],
        providers: [gym_plans_service_1.GymPlansService],
        exports: [gym_plans_service_1.GymPlansService],
    })
], GymPlansModule);
//# sourceMappingURL=gym-plans.module.js.map