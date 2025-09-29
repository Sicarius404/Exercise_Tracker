import { Module } from "@nestjs/common";
import { AuthModule as BetterAuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./auth";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [BetterAuthModule.forRoot(auth), PrismaModule],
})
export class AuthModule {}
