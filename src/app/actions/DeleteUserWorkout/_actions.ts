"use server";

import { deleteWorkout } from "@/lib/exercises.db";

export const deleteWorkoutAction = async (
  userEmail: string,
  workoutId: string
) => {
  await deleteWorkout(userEmail, workoutId);
};
