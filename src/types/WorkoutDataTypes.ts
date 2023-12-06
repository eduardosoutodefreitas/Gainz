import { Workout } from "@prisma/client";

export type WorkoutData = Pick<Workout, "name" | "exercisesList">;
