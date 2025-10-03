import { Module } from "@nestjs/common";
import { StravaController } from "./strava.controller";
import { StravaService } from "./strava.service";
import { RunsModule } from "../runs/runs.module";
import { PrismaModule } from "../database/prisma.module";

@Module({
  imports: [RunsModule, PrismaModule],
  controllers: [StravaController],
  providers: [StravaService],
})
export class StravaModule {}
