"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevGuard = void 0;
const common_1 = require("@nestjs/common");
const DEV_GUARD_DISABLED_MESSAGE = "Dev endpoints are disabled in production.";
let DevGuard = class DevGuard {
    canActivate(_context) {
        const isDevelopmentEnvironment = process.env.NODE_ENV !== "production";
        if (!isDevelopmentEnvironment) {
            throw new common_1.ForbiddenException(DEV_GUARD_DISABLED_MESSAGE);
        }
        return true;
    }
};
exports.DevGuard = DevGuard;
exports.DevGuard = DevGuard = __decorate([
    (0, common_1.Injectable)()
], DevGuard);
//# sourceMappingURL=dev.guard.js.map