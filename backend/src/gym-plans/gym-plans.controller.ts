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
} from "@nestjs/common";
import { GymPlansService } from "./gym-plans.service";
import { AuthGuard, Session, UserSession } from "@thallesp/nestjs-better-auth";

@Controller("gym-plans")
@UseGuards(AuthGuard)
export class GymPlansController {
  constructor(private readonly gymPlansService: GymPlansService) {}

  @Post()
  create(
    @Body()
    createGymPlanDto: any,
    @Request() req: any
  ) {
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
    @Body()
    updateGymPlanDto: any,
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
    @Body() exerciseData: any,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.gymPlansService.addExercise(+gymPlanId, userId, exerciseData);
  }

  @Patch("exercises/:exerciseId")
  updateExercise(
    @Param("exerciseId") exerciseId: string,
    @Body()
    updateData: any,
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
    @Body() completedData: any,
    @Request() req: any
  ) {
    const userId = req.user.id;
    return this.gymPlansService.completeExercise(
      +exerciseId,
      userId,
      completedData
    );
  }
}
