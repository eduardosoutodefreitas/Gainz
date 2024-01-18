import { UserExercise } from "@prisma/client";

export type WorkoutData = {
  name: string;
  userExercises: {
    name: string;
    exerciseId: string;
    sets: number;
    reps: number;
  }[];
};
