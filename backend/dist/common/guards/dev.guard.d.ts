import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class DevGuard implements CanActivate {
    canActivate(_context: ExecutionContext): boolean;
}
