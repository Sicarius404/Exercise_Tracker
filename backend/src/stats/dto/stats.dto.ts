import {
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
} from "class-validator";

export class GetWeeklyStatsDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsOptional()
  @IsString()
  weekStart?: string;
}

export class GetPersonalRecordsDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;
}

export class GetCalendarViewDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(12)
  month?: number;

  @IsOptional()
  @IsNumber()
  @Min(2010)
  @Max(2030)
  year?: number;
}

export class GetMonthlySummaryDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsNumber()
  @Min(1)
  @Max(12)
  month!: number;

  @IsNumber()
  @Min(2010)
  @Max(2030)
  year!: number;
}

export class GetDashboardDataDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;
}