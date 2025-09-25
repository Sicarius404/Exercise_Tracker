import { Module } from "@nestjs/common";
import { GymPlansService } from "./gym-plans.service";
import { GymPlansController } from "./gym-plans.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [GymPlansController],
  providers: [GymPlansService],
  exports: [GymPlansService],
})
export class GymPlansModule {}
