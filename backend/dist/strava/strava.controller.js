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
exports.StravaController = void 0;
const common_1 = require("@nestjs/common");
const strava_service_1 = require("./strava.service");
let StravaController = class StravaController {
    constructor(stravaService) {
        this.stravaService = stravaService;
    }
    getAuthUrl() {
        return {
            authorizationUrl: this.stravaService.getAuthorizationUrl(),
        };
    }
    async handleCallback(code, error) {
        if (error) {
            return { error: "Strava authorization failed", details: error };
        }
        if (!code) {
            return { error: "No authorization code provided" };
        }
        try {
            const tokenData = await this.stravaService.exchangeCodeForToken(code);
            return {
                message: "Successfully connected to Strava",
                tokenData,
            };
        }
        catch (err) {
            return {
                error: "Failed to exchange code for token",
                details: err.message,
            };
        }
    }
    async importRuns(body) {
        try {
            const activities = await this.stravaService.getActivities(body.accessToken);
            const runs = activities
                .filter((activity) => activity.type === "Run")
                .map((activity) => this.stravaService.convertStravaActivityToRun(activity, body.userId));
            return {
                message: `Found ${runs.length} runs to import`,
                runs,
            };
        }
        catch (err) {
            return { error: "Failed to import runs", details: err.message };
        }
    }
    async getActivities(accessToken, page) {
        try {
            const activities = await this.stravaService.getActivities(accessToken, 30, parseInt(page) || 1);
            return { activities };
        }
        catch (err) {
            return { error: "Failed to fetch activities", details: err.message };
        }
    }
    async getAthlete(accessToken) {
        try {
            const athlete = await this.stravaService.getAthlete(accessToken);
            return { athlete };
        }
        catch (err) {
            return { error: "Failed to fetch athlete data", details: err.message };
        }
    }
};
exports.StravaController = StravaController;
__decorate([
    (0, common_1.Get)("auth-url"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StravaController.prototype, "getAuthUrl", null);
__decorate([
    (0, common_1.Get)("callback"),
    __param(0, (0, common_1.Query)("code")),
    __param(1, (0, common_1.Query)("error")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "handleCallback", null);
__decorate([
    (0, common_1.Post)("import-runs"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "importRuns", null);
__decorate([
    (0, common_1.Get)("activities"),
    __param(0, (0, common_1.Query)("accessToken")),
    __param(1, (0, common_1.Query)("page")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "getActivities", null);
__decorate([
    (0, common_1.Get)("athlete"),
    __param(0, (0, common_1.Query)("accessToken")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "getAthlete", null);
exports.StravaController = StravaController = __decorate([
    (0, common_1.Controller)("strava"),
    __metadata("design:paramtypes", [strava_service_1.StravaService])
], StravaController);
//# sourceMappingURL=strava.controller.js.map