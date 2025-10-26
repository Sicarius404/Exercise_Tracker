import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  Min,
} from "class-validator";

export class CreateRunDto {
  @IsOptional()
  @IsString()
  stravaId?: string;

  @IsDateString()
  date!: string;

  @IsNumber()
  @Min(0)
  distance!: number;

  @IsNumber()
  @Min(0)
  duration!: number;

  @IsNumber()
  @Min(0)
  pace!: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateRunDto {
  @IsOptional()
  @IsString()
  stravaId?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  distance?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  pace?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
