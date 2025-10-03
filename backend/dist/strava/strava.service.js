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
exports.StravaService = void 0;
const common_1 = require("@nestjs/common");
const runs_service_1 = require("../runs/runs.service");
const prisma_service_1 = require("../database/prisma.service");
let StravaService = class StravaService {
    constructor(runsService, prisma) {
        this.runsService = runsService;
        this.prisma = prisma;
        this.STRAVA_API_BASE = "https://www.strava.com/api/v3";
        this.CLIENT_ID = process.env.STRAVA_CLIENT_ID;
        this.CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
    }
    async exchangeCodeForToken(code) {
        try {
            const response = await fetch("https://www.strava.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    client_id: this.CLIENT_ID,
                    client_secret: this.CLIENT_SECRET,
                    code,
                    grant_type: "authorization_code",
                }),
            });
            if (!response.ok) {
                throw new common_1.HttpException("Failed to exchange code for token", common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            throw new common_1.HttpException("Strava authentication failed", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async refreshToken(refreshToken) {
        try {
            const response = await fetch("https://www.strava.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    client_id: this.CLIENT_ID,
                    client_secret: this.CLIENT_SECRET,
                    refresh_token: refreshToken,
                    grant_type: "refresh_token",
                }),
            });
            if (!response.ok) {
                throw new common_1.HttpException("Failed to refresh token", common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            throw new common_1.HttpException("Token refresh failed", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getActivities(accessToken, perPage = 30, page = 1) {
        try {
            const response = await fetch(`${this.STRAVA_API_BASE}/athlete/activities?per_page=${perPage}&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Strava API error:", response.status, errorText);
                throw new common_1.HttpException(`Failed to fetch activities from Strava: ${response.status} - ${errorText}`, common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            console.error("Error fetching Strava activities:", error);
            throw new common_1.HttpException(`Failed to fetch Strava activities: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getActivity(accessToken, activityId) {
        try {
            const response = await fetch(`${this.STRAVA_API_BASE}/activities/${activityId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                throw new common_1.HttpException("Failed to fetch activity from Strava", common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            throw new common_1.HttpException("Failed to fetch Strava activity", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAthlete(accessToken) {
        try {
            const response = await fetch(`${this.STRAVA_API_BASE}/athlete`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                throw new common_1.HttpException("Failed to fetch athlete data from Strava", common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            throw new common_1.HttpException("Failed to fetch Strava athlete data", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async importStravaActivities(userId, accessToken) {
        try {
            const stravaActivities = await this.getActivities(accessToken);
            const runActivities = stravaActivities.filter(act => act.type === "Run");
            for (const activity of runActivities) {
                const existingRun = await this.runsService.findByStravaId(activity.id.toString());
                if (!existingRun) {
                    const runData = this.convertStravaActivityToRun(activity, userId);
                    await this.runsService.create(runData);
                }
            }
        }
        catch (error) {
            console.error("Error importing Strava activities:", error);
            throw new common_1.HttpException(`Failed to import Strava activities: ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    convertStravaActivityToRun(stravaActivity, userId) {
        const distance = stravaActivity.distance / 1000;
        const pace = stravaActivity.moving_time > 0
            ? stravaActivity.moving_time / 60 / distance
            : 0;
        return {
            stravaId: stravaActivity.id.toString(),
            date: new Date(stravaActivity.start_date),
            distance,
            duration: stravaActivity.moving_time / 60,
            pace,
            notes: stravaActivity.description || `${stravaActivity.name} via Strava`,
            userId,
        };
    }
    getAuthorizationUrl() {
        const params = new URLSearchParams({
            client_id: this.CLIENT_ID,
            response_type: "code",
            redirect_uri: process.env.STRAVA_REDIRECT_URI ||
                "http://localhost:3000/strava/callback",
            scope: "read,activity:read_all",
            approval_prompt: "auto",
        });
        return `https://www.strava.com/oauth/authorize?${params.toString()}`;
    }
    async saveStravaTokens(userId, tokenData, athleteId) {
        try {
            const expiresAt = new Date(tokenData.expires_at * 1000);
            await this.prisma.account.upsert({
                where: {
                    id: `${userId}_strava_${athleteId}`,
                },
                create: {
                    id: `${userId}_strava_${athleteId}`,
                    userId,
                    providerId: "strava",
                    accountId: athleteId,
                    accessToken: tokenData.access_token,
                    refreshToken: tokenData.refresh_token,
                    accessTokenExpiresAt: expiresAt,
                    scope: "read,activity:read_all",
                },
                update: {
                    accessToken: tokenData.access_token,
                    refreshToken: tokenData.refresh_token,
                    accessTokenExpiresAt: expiresAt,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            console.error("Error saving Strava tokens:", error);
            throw new common_1.HttpException("Failed to save Strava connection", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getStravaAccount(userId) {
        try {
            const account = await this.prisma.account.findFirst({
                where: {
                    userId,
                    providerId: "strava",
                },
            });
            return account;
        }
        catch (error) {
            console.error("Error fetching Strava account:", error);
            return null;
        }
    }
    async getValidAccessToken(userId) {
        try {
            const account = await this.getStravaAccount(userId);
            if (!account) {
                return null;
            }
            const now = new Date();
            if (account.accessTokenExpiresAt && account.accessTokenExpiresAt > now) {
                return account.accessToken;
            }
            if (account.refreshToken) {
                const tokenData = await this.refreshToken(account.refreshToken);
                await this.saveStravaTokens(userId, tokenData, account.accountId);
                return tokenData.access_token;
            }
            return null;
        }
        catch (error) {
            console.error("Error getting valid access token:", error);
            return null;
        }
    }
};
exports.StravaService = StravaService;
exports.StravaService = StravaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [runs_service_1.RunsService,
        prisma_service_1.PrismaService])
], StravaService);
//# sourceMappingURL=strava.service.js.map