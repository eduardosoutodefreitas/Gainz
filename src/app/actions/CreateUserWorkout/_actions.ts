"use server";

import { createWorkout } from "@/lib/exercises.db";
import { WorkoutData } from "@/types/WorkoutDataTypes";

export const createWorkoutAction = async (
  userEmail: string,
  workoutData: WorkoutData
) => {
  await createWorkout(userEmail, workoutData);
};
