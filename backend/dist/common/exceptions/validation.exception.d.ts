import { HttpException } from "@nestjs/common";
export declare class ValidationException extends HttpException {
    constructor(message: string, errors?: any);
}
export declare class ResourceNotFoundException extends HttpException {
    constructor(resource: string, identifier?: string);
}
export declare class UnauthorizedException extends HttpException {
    constructor(message?: string);
}
export declare class ForbiddenException extends HttpException {
    constructor(message?: string);
}
export declare class ConflictException extends HttpException {
    constructor(message: string);
}
export declare class ExternalServiceException extends HttpException {
    constructor(service: string, message: string);
}
