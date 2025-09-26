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
let StravaService = class StravaService {
    constructor(runsService) {
        this.runsService = runsService;
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
                throw new common_1.HttpException("Failed to fetch activities from Strava", common_1.HttpStatus.BAD_REQUEST);
            }
            return response.json();
        }
        catch (error) {
            throw new common_1.HttpException("Failed to fetch Strava activities", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
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
            for (const activity of stravaActivities) {
                const existingRun = await this.runsService.findByStravaId(activity.id.toString());
                if (!existingRun) {
                    const runData = this.convertStravaActivityToRun(activity, userId);
                    await this.runsService.create(runData);
                }
            }
        }
        catch (error) {
            throw new common_1.HttpException("Failed to import Strava activities", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
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
                "http://localhost:3000/auth/strava/callback",
            scope: "read,activity:read",
            approval_prompt: "auto",
        });
        return `https://www.strava.com/oauth/authorize?${params.toString()}`;
    }
};
exports.StravaService = StravaService;
exports.StravaService = StravaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [runs_service_1.RunsService])
], StravaService);
//# sourceMappingURL=strava.service.js.map