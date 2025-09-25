import { Module } from "@nestjs/common";
import { RunPlansService } from "./run-plans.service";
import { RunPlansController } from "./run-plans.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [RunPlansController],
  providers: [RunPlansService],
})
export class RunPlansModule {}
