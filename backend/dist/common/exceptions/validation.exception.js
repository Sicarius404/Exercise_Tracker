"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalServiceException = exports.ConflictException = exports.ForbiddenException = exports.UnauthorizedException = exports.ResourceNotFoundException = exports.ValidationException = void 0;
const common_1 = require("@nestjs/common");
class ValidationException extends common_1.HttpException {
    constructor(message, errors) {
        super({
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message,
            errors,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ValidationException = ValidationException;
class ResourceNotFoundException extends common_1.HttpException {
    constructor(resource, identifier) {
        super({
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: `${resource}${identifier ? ` with identifier '${identifier}'` : ""} not found`,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class UnauthorizedException extends common_1.HttpException {
    constructor(message = "Unauthorized access") {
        super({
            statusCode: common_1.HttpStatus.UNAUTHORIZED,
            message,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends common_1.HttpException {
    constructor(message = "Forbidden operation") {
        super({
            statusCode: common_1.HttpStatus.FORBIDDEN,
            message,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ForbiddenException = ForbiddenException;
class ConflictException extends common_1.HttpException {
    constructor(message) {
        super({
            statusCode: common_1.HttpStatus.CONFLICT,
            message,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.CONFLICT);
    }
}
exports.ConflictException = ConflictException;
class ExternalServiceException extends common_1.HttpException {
    constructor(service, message) {
        super({
            statusCode: common_1.HttpStatus.BAD_GATEWAY,
            message: `Error communicating with ${service}: ${message}`,
            service,
            timestamp: new Date().toISOString(),
        }, common_1.HttpStatus.BAD_GATEWAY);
    }
}
exports.ExternalServiceException = ExternalServiceException;
//# sourceMappingURL=validation.exception.js.map