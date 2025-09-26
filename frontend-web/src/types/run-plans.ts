export interface RunPlan {
  readonly id: number;
  readonly week: number;
  readonly day: number;
  readonly type: string;
  readonly plannedTime?: number;
  readonly plannedDistance?: number;
  readonly userId: number;
}

export interface CreateRunPlanInput {
  readonly week: number;
  readonly day: number;
  readonly type: string;
  readonly plannedTime?: number;
  readonly plannedDistance?: number;
}

export interface UpdateRunPlanInput {
  readonly week?: number;
  readonly day?: number;
  readonly type?: string;
  readonly plannedTime?: number;
  readonly plannedDistance?: number;
  readonly completedRunId?: number | null;
}
