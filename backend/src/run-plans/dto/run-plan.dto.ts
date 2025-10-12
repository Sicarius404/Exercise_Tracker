import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  Max,
} from "class-validator";

export class CreateRunPlanDto {
  @IsNumber()
  @Min(1)
  week!: number;

  @IsNumber()
  @Min(1)
  @Max(7)
  day!: number;

  @IsString()
  type!: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedTime?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedDistance?: number;
}

export class UpdateRunPlanDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  week?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(7)
  day?: number;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedTime?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedDistance?: number;
}