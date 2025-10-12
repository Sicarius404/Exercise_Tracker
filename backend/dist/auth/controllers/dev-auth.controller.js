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
exports.DevAuthController = void 0;
const common_1 = require("@nestjs/common");
const delete_all_users_dto_1 = require("../dto/delete-all-users.dto");
const auth_service_1 = require("../auth.service");
const dev_guard_1 = require("../../common/guards/dev.guard");
let DevAuthController = class DevAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async deleteAllUsers(input) {
        if (!input.confirm) {
            return { deletedUsers: 0 };
        }
        const deletedUsers = await this.authService.deleteAllUsers();
        return { deletedUsers };
    }
};
exports.DevAuthController = DevAuthController;
__decorate([
    (0, common_1.Post)("delete-users"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_all_users_dto_1.DeleteAllUsersDto]),
    __metadata("design:returntype", Promise)
], DevAuthController.prototype, "deleteAllUsers", null);
exports.DevAuthController = DevAuthController = __decorate([
    (0, common_1.Controller)("dev/auth"),
    (0, common_1.UseGuards)(dev_guard_1.DevGuard),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], DevAuthController);
//# sourceMappingURL=dev-auth.controller.js.map