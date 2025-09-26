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

export interface CreateRunInput {
  readonly date: string;
  readonly distance: number;
  readonly duration: number;
  readonly pace: number;
  readonly notes?: string;
  readonly userId: number;
  readonly stravaId?: string;
}

export interface UpdateRunInput {
  readonly date?: string;
  readonly distance?: number;
  readonly duration?: number;
  readonly pace?: number;
  readonly notes?: string;
  readonly stravaId?: string;
}
