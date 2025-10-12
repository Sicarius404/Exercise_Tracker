import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {
  constructor(message: string, errors?: any) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message,
        errors,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.BAD_REQUEST
    );
  }
}

export class ResourceNotFoundException extends HttpException {
  constructor(resource: string, identifier?: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: `${resource}${identifier ? ` with identifier '${identifier}'` : ""} not found`,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.NOT_FOUND
    );
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = "Unauthorized access") {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        message,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.UNAUTHORIZED
    );
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string = "Forbidden operation") {
    super(
      {
        statusCode: HttpStatus.FORBIDDEN,
        message,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.FORBIDDEN
    );
  }
}

export class ConflictException extends HttpException {
  constructor(message: string) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.CONFLICT
    );
  }
}

export class ExternalServiceException extends HttpException {
  constructor(service: string, message: string) {
    super(
      {
        statusCode: HttpStatus.BAD_GATEWAY,
        message: `Error communicating with ${service}: ${message}`,
        service,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.BAD_GATEWAY
    );
  }
}