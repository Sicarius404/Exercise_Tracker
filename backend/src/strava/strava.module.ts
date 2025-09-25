import { Module } from "@nestjs/common";
import { StravaController } from "./strava.controller";
import { StravaService } from "./strava.service";
import { RunsModule } from "../runs/runs.module";

@Module({
  imports: [RunsModule],
  controllers: [StravaController],
  providers: [StravaService],
})
export class StravaModule {}
