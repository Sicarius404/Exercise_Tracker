import { Module } from "@nestjs/common";
import { AuthModule as BetterAuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./auth";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule, BetterAuthModule.forRoot(auth)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
