import { Exercise } from "@/types/ExercisesTypes";
import { UserExercise } from "@prisma/client";
interface ExtendedExercise extends Exercise {
  sets: number;
  reps: number;
}

function getUserWorkoutExercises(
  userExercisesList: UserExercise[],
  exercises: Exercise[]
): ExtendedExercise[] {
  return userExercisesList
    .map((userExercise) => {
      const correspondingExercise = exercises.find(
        (exercise) => exercise.id === userExercise.exerciseId
      );

      if (correspondingExercise) {
        const extendedExercise: ExtendedExercise = {
          ...correspondingExercise,
          sets: userExercise.sets,
          reps: userExercise.reps,
        };

        return extendedExercise;
      }

      return null;
    })
    .filter(Boolean) as ExtendedExercise[];
}

export default getUserWorkoutExercises;
