import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";

const DEV_GUARD_DISABLED_MESSAGE =
  "Dev endpoints are disabled in production." as const;

/**
 * Guard that allows access to development-only endpoints when the application is not in production.
 */
@Injectable()
export class DevGuard implements CanActivate {
  /**
   * Allows execution only when the application is running outside production environments.
   */
  canActivate(_context: ExecutionContext): boolean {
    const isDevelopmentEnvironment = process.env.NODE_ENV !== "production";
    if (!isDevelopmentEnvironment) {
      throw new ForbiddenException(DEV_GUARD_DISABLED_MESSAGE);
    }
    return true;
  }
}
