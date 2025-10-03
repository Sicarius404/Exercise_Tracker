import { AuthModule } from "./auth/auth.module";
import { RunsModule } from "./runs/runs.module";
import { GymPlansModule } from "./gym-plans/gym-plans.module";
import { StatsModule } from "./stats/stats.module";
import { StravaModule } from "./strava/strava.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./database/prisma.module";
import { RunPlansModule } from "./run-plans/run-plans.module";
import { ConfigModule } from "@nestjs/config";
import { DevtoolsModule } from "@nestjs/devtools-integration";

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== "production",
    }),
    AuthModule,
    RunsModule,
    GymPlansModule,
    StatsModule,
    StravaModule,
    PrismaModule,
    RunPlansModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes .env available everywhere
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
