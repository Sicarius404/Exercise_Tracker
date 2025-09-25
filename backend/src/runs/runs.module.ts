import { Module } from "@nestjs/common";
import { RunsController } from "./runs.controller";
import { RunsService } from "./runs.service";
import { PrismaModule } from "../database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [RunsController],
  providers: [RunsService],
  exports: [RunsService],
})
export class RunsModule {}
