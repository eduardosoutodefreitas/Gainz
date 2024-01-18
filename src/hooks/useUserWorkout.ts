import getExercises from "@/services/getExercises";
import getUserEmail from "@/services/getUserEmail";
import getUserWorkoutExercises from "@/services/getUserWorkoutExercises";
import { Exercise } from "@/types/ExercisesTypes";
import prisma from "@/lib/prisma";

const useUserWorkout = async (id: string) => {
  const exercises: Exercise[] = await getExercises(); //Todos os exercícios da API

  const { session, userEmail } = await getUserEmail(); //Email do Usuário

  const workout = await prisma?.workout.findUnique({
    where: {
      id: id,
    },
  }); //workout com id = id

  const userExercises = await prisma?.userExercise.findMany({
    where: {
      workoutId: id,
    },
  }); //Exercícios pertencentes ao workout

  const workoutExercises = getUserWorkoutExercises(userExercises!, exercises); //Pega os exercícios com o gif atualizado
  return { workoutExercises, workout, userExercises, session, userEmail };
};

export default useUserWorkout;
