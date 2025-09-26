import { z } from "zod";

export const CreateRunPlanSchema = z.object({
  week: z
    .number({ invalid_type_error: "Week must be a number" })
    .int()
    .min(1, "Week must be at least 1")
    .max(52, "Week must be 52 or less"),
  day: z
    .number({ invalid_type_error: "Day must be a number" })
    .int()
    .min(1, "Select a day of the week")
    .max(7, "Day must be within 1-7"),
  type: z
    .string({ invalid_type_error: "Session type is required" })
    .min(2, "Session type is required")
    .max(80, "Keep the session type under 80 characters"),
  plannedDistance: z
    .number({ invalid_type_error: "Distance must be a number" })
    .min(0, "Distance cannot be negative")
    .optional(),
  plannedTime: z
    .number({ invalid_type_error: "Duration must be a number" })
    .min(0, "Duration cannot be negative")
    .optional(),
});
