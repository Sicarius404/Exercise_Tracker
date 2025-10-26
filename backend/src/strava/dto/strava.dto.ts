import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  Min,
} from "class-validator";

export class ImportRunsDto {
  @IsString()
  @IsNotEmpty()
  accessToken!: string;

  @IsString()
  @IsNotEmpty()
  refreshToken!: string;

  @IsNumber()
  @Min(0)
  expiresAt!: number;

  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  athleteId!: string;
}

export class SyncRunsDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;
}

export class GetActivitiesDto {
  @IsString()
  @IsNotEmpty()
  accessToken!: string;

  @IsOptional()
  @IsString()
  page?: string;
}

export class GetAthleteDto {
  @IsString()
  @IsNotEmpty()
  accessToken!: string;
}

export class GetConnectionStatusDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;
}
