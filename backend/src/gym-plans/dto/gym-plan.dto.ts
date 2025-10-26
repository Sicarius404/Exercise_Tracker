import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";

export class ExerciseDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  sets!: number;

  @IsNumber()
  @Min(1)
  @Max(1000)
  reps!: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  weight!: number;
}

export class CreateGymPlanDto {
  @IsNumber()
  @Min(1)
  week!: number;

  @IsNumber()
  @Min(1)
  @Max(7)
  day!: number;

  @IsString()
  muscleGroup!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExerciseDto)
  exercises!: ExerciseDto[];
}

export class UpdateGymPlanDto {
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
  muscleGroup?: string;
}

export class UpdateExerciseDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  sets?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(1000)
  reps?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10000)
  weight?: number;
}

export class CompleteExerciseDto {
  @IsNumber()
  @Min(1)
  @Max(100)
  actualSets!: number;

  @IsNumber()
  @Min(1)
  @Max(1000)
  actualReps!: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  actualWeight!: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
