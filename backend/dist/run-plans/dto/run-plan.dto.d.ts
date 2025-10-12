export declare class CreateRunPlanDto {
    week: number;
    day: number;
    type: string;
    plannedTime?: number;
    plannedDistance?: number;
}
export declare class UpdateRunPlanDto {
    week?: number;
    day?: number;
    type?: string;
    plannedTime?: number;
    plannedDistance?: number;
}
