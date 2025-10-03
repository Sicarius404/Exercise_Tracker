"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StravaModule = void 0;
const common_1 = require("@nestjs/common");
const strava_controller_1 = require("./strava.controller");
const strava_service_1 = require("./strava.service");
const runs_module_1 = require("../runs/runs.module");
const prisma_module_1 = require("../database/prisma.module");
let StravaModule = class StravaModule {
};
exports.StravaModule = StravaModule;
exports.StravaModule = StravaModule = __decorate([
    (0, common_1.Module)({
        imports: [runs_module_1.RunsModule, prisma_module_1.PrismaModule],
        controllers: [strava_controller_1.StravaController],
        providers: [strava_service_1.StravaService],
    })
], StravaModule);
//# sourceMappingURL=strava.module.js.map