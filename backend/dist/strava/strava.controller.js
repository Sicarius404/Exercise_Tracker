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
const strava_dto_1 = require("./dto/strava.dto");
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
            const athleteData = await this.stravaService.getAthlete(tokenData.access_token);
            return {
                message: "Successfully connected to Strava",
                tokenData,
                athleteId: athleteData.id.toString(),
            };
        }
        catch (err) {
            return {
                error: "Failed to exchange code for token",
                details: err.message,
            };
        }
    }
    async importRuns(importRunsDto) {
        try {
            await this.stravaService.importStravaActivities(importRunsDto.userId, importRunsDto.accessToken);
            await this.stravaService.saveStravaTokens(importRunsDto.userId, {
                access_token: importRunsDto.accessToken,
                refresh_token: importRunsDto.refreshToken,
                expires_at: importRunsDto.expiresAt,
                expires_in: 0,
                token_type: "Bearer",
            }, importRunsDto.athleteId);
            return {
                message: `Successfully imported runs from Strava`,
                success: true,
            };
        }
        catch (err) {
            return { error: "Failed to import runs", details: err.message };
        }
    }
    async getConnectionStatus(getConnectionStatusDto) {
        try {
            const account = await this.stravaService.getStravaAccount(getConnectionStatusDto.userId);
            if (!account) {
                return { connected: false };
            }
            return {
                connected: true,
                athleteId: account.accountId,
            };
        }
        catch (err) {
            return {
                connected: false,
                error: err.message,
            };
        }
    }
    async syncRuns(syncRunsDto) {
        try {
            const accessToken = await this.stravaService.getValidAccessToken(syncRunsDto.userId);
            if (!accessToken) {
                return {
                    error: "Not connected to Strava",
                    details: "Please connect your Strava account first",
                };
            }
            await this.stravaService.importStravaActivities(syncRunsDto.userId, accessToken);
            return {
                message: "Successfully synced runs from Strava",
                success: true,
            };
        }
        catch (err) {
            return { error: "Failed to sync runs", details: err.message };
        }
    }
    async getActivities(getActivitiesDto) {
        try {
            const activities = await this.stravaService.getActivities(getActivitiesDto.accessToken, 30, parseInt(getActivitiesDto.page || "1"));
            return { activities };
        }
        catch (err) {
            return { error: "Failed to fetch activities", details: err.message };
        }
    }
    async getAthlete(getAthleteDto) {
        try {
            const athlete = await this.stravaService.getAthlete(getAthleteDto.accessToken);
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
    __metadata("design:paramtypes", [strava_dto_1.ImportRunsDto]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "importRuns", null);
__decorate([
    (0, common_1.Get)("connection-status"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [strava_dto_1.GetConnectionStatusDto]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "getConnectionStatus", null);
__decorate([
    (0, common_1.Post)("sync-runs"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [strava_dto_1.SyncRunsDto]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "syncRuns", null);
__decorate([
    (0, common_1.Get)("activities"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [strava_dto_1.GetActivitiesDto]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "getActivities", null);
__decorate([
    (0, common_1.Get)("athlete"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [strava_dto_1.GetAthleteDto]),
    __metadata("design:returntype", Promise)
], StravaController.prototype, "getAthlete", null);
exports.StravaController = StravaController = __decorate([
    (0, common_1.Controller)("strava"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __metadata("design:paramtypes", [strava_service_1.StravaService])
], StravaController);
//# sourceMappingURL=strava.controller.js.map