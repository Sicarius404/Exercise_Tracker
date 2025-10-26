import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { GymPlansService } from "./gym-plans.service";
import { AuthGuard } from "@thallesp/nestjs-better-auth";
import {
  CreateGymPlanDto,
  UpdateGymPlanDto,
  ExerciseDto,
  UpdateExerciseDto,
  CompleteExerciseDto,
} from "./dto/gym-plan.dto";

@Controller("gym-plans")
@UseGuards(AuthGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class GymPlansController {
  constructor(private readonly gymPlansService: GymPlansService) {}

  @Post()
  create(@Body() createGymPlanDto: CreateGymPlanDto, @Request() req: any) {
    const userId = req.user.id;
    return this.gymPlansService.create({ ...createGymPlanDto, userId });
  }

  @Get()
  findAll(@Request() req: any) {
    const userId = req.user.id;
    return this.gymPlansService.findAll(userId);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.gymPlansService.findOne(+id, userId);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGymPlanDto: UpdateGymPlanDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.gymPlansService.update(+id, userId, updateGymPlanDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Request() req: any) {
    const userId = req.user.id;
    return this.gymPlansService.remove(+id, userId);
  }

  @Post(":id/exercises")
  addExercise(
    @Param("id") gymPlanId: string,
    @Body() exerciseData: ExerciseDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.gymPlansService.addExercise(+gymPlanId, userId, exerciseData);
  }

  @Patch("exercises/:exerciseId")
  updateExercise(
    @Param("exerciseId") exerciseId: string,
    @Body() updateData: UpdateExerciseDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.gymPlansService.updateExercise(+exerciseId, userId, updateData);
  }

  @Delete("exercises/:exerciseId")
  removeExercise(@Param("exerciseId") exerciseId: string, @Request() req: any) {
    const userId = req.user.id;
    return this.gymPlansService.removeExercise(+exerciseId, userId);
  }

  @Post("exercises/:exerciseId/complete")
  completeExercise(
    @Param("exerciseId") exerciseId: string,
    @Body() completedData: CompleteExerciseDto,
    @Request() req: any
  ) {
    const userId = req.user.id;
    const exerciseData = {
      actualSets: completedData.actualSets,
      actualReps: completedData.actualReps,
      actualWeight: completedData.actualWeight,
      notes: completedData.notes || null,
      createdAt: new Date(),
    };
    return this.gymPlansService.completeExercise(
      +exerciseId,
      userId,
      exerciseData
    );
  }
}
