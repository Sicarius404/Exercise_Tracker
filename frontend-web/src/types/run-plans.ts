export interface RunPlan {
  readonly id: number;
  readonly week: number;
  readonly day: number;
  readonly type: string;
  readonly plannedTime?: number;
  readonly plannedDistance?: number;
  readonly userId: number;
}
