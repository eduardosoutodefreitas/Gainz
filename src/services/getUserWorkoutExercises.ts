import { Exercise } from "@/types/ExercisesTypes";

function getUserWorkoutExercises(
  userExercisesList: string[],
  exercises: Exercise[]
) {
  const exercisesFromUserExercisesList = exercises.filter((exercise) =>
    userExercisesList.includes(exercise.id)
  );

  return exercisesFromUserExercisesList;
}

export default getUserWorkoutExercises;
