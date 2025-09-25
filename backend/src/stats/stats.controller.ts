import { Controller, Get, Query } from "@nestjs/common";
import { StatsService } from "./stats.service";

@Controller("stats")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get("weekly")
  async getWeeklyStats(
    @Query("userId") userId: string,
    @Query("weekStart") weekStart?: string
  ) {
    const weekStartDate = weekStart ? new Date(weekStart) : undefined;
    return this.statsService.getWeeklyStats(parseInt(userId), weekStartDate);
  }

  @Get("personal-records")
  async getPersonalRecords(@Query("userId") userId: string) {
    return this.statsService.getPersonalRecords(parseInt(userId));
  }

  @Get("calendar")
  async getCalendarView(
    @Query("userId") userId: string,
    @Query("month") month?: string,
    @Query("year") year?: string
  ) {
    return this.statsService.getCalendarView(
      parseInt(userId),
      month ? parseInt(month) : undefined,
      year ? parseInt(year) : undefined
    );
  }

  @Get("monthly")
  async getMonthlySummary(
    @Query("userId") userId: string,
    @Query("month") month: string,
    @Query("year") year: string
  ) {
    return this.statsService.getMonthlySummary(
      parseInt(userId),
      parseInt(month),
      parseInt(year)
    );
  }

  @Get("dashboard")
  async getDashboardData(@Query("userId") userId: string) {
    const [weeklyStats, personalRecords, calendarView] = await Promise.all([
      this.statsService.getWeeklyStats(parseInt(userId)),
      this.statsService.getPersonalRecords(parseInt(userId)),
      this.statsService.getCalendarView(parseInt(userId)),
    ]);

    return {
      weeklyStats,
      personalRecords,
      calendarView,
    };
  }
}

