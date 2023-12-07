import { Exercise } from "@/types/ExercisesTypes";

function getUserWorkoutExercises(
  userExercisesList: string[],
  exercises: Exercise[]
) {
  return userExercisesList.flatMap((exerciseId) =>
    exercises.filter((exercise) => exercise.id === exerciseId)
  );
}

export default getUserWorkoutExercises;
