import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { StatsService } from "./stats.service";
import {
  GetWeeklyStatsDto,
  GetPersonalRecordsDto,
  GetCalendarViewDto,
  GetMonthlySummaryDto,
  GetDashboardDataDto,
} from "./dto/stats.dto";

@Controller("stats")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  })
)
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get("weekly")
  async getWeeklyStats(@Query() getWeeklyStatsDto: GetWeeklyStatsDto) {
    const weekStartDate = getWeeklyStatsDto.weekStart
      ? new Date(getWeeklyStatsDto.weekStart)
      : undefined;
    return this.statsService.getWeeklyStats(
      getWeeklyStatsDto.userId,
      weekStartDate
    );
  }

  @Get("personal-records")
  async getPersonalRecords(
    @Query() getPersonalRecordsDto: GetPersonalRecordsDto
  ) {
    return this.statsService.getPersonalRecords(getPersonalRecordsDto.userId);
  }

  @Get("calendar")
  async getCalendarView(@Query() getCalendarViewDto: GetCalendarViewDto) {
    return this.statsService.getCalendarView(
      getCalendarViewDto.userId,
      getCalendarViewDto.month,
      getCalendarViewDto.year
    );
  }

  @Get("monthly")
  async getMonthlySummary(@Query() getMonthlySummaryDto: GetMonthlySummaryDto) {
    return this.statsService.getMonthlySummary(
      getMonthlySummaryDto.userId,
      getMonthlySummaryDto.month,
      getMonthlySummaryDto.year
    );
  }

  @Get("dashboard")
  async getDashboardData(@Query() getDashboardDataDto: GetDashboardDataDto) {
    const [weeklyStats, personalRecords, calendarView] = await Promise.all([
      this.statsService.getWeeklyStats(getDashboardDataDto.userId),
      this.statsService.getPersonalRecords(getDashboardDataDto.userId),
      this.statsService.getCalendarView(getDashboardDataDto.userId),
    ]);

    return {
      weeklyStats,
      personalRecords,
      calendarView,
    };
  }
}
