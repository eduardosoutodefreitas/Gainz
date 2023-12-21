"use server";

import { deleteWorkout } from "@/lib/exercises.db";
import { revalidatePath } from "next/cache";

export const deleteWorkoutAction = async (
  userEmail: string,
  workoutId: string
) => {
  await deleteWorkout(userEmail, workoutId);
  revalidatePath("/myWorkouts");
};
