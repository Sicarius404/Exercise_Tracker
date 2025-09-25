import { Module } from "@nestjs/common";
import { StatsController } from "./stats.controller";
import { StatsService } from "./stats.service";
import { RunsModule } from "src/runs/runs.module";
import { GymPlansModule } from "src/gym-plans/gym-plans.module";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule, RunsModule, GymPlansModule],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
