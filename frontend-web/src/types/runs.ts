export interface Run {
  readonly id: number;
  readonly stravaId?: string;
  readonly date: string;
  readonly distance: number;
  readonly duration: number;
  readonly pace: number;
  readonly notes?: string;
  readonly userId: number;
}
