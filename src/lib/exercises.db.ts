import { WorkoutData } from "@/types/WorkoutDataTypes";
import prisma from "./prisma";

const handleErrors = (message: string, error: any) => {
  console.error(message, error);
  throw error;
};

export async function createWorkout(
  userEmail: string,
  workoutData: WorkoutData
) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { workouts: true },
    });

    if (!user) {
      handleErrors("Usuário não encontrado.", null);
      return null;
    }

    const newWorkout = await prisma.workout.create({
      data: {
        name: workoutData.name,
        userId: user.id,
        userExercises: {
          create: workoutData.userExercises.map((exercise) => ({
            name: exercise.name,
            reps: exercise.reps || 12,
            sets: exercise.sets || 4,
            exerciseId: exercise.exerciseId,
          })),
        },
      },
    });

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { workouts: { connect: { id: newWorkout.id } } },
    });

    console.log("Usuário com novos treinos:", updatedUser);
    return newWorkout;
  } catch (error) {
    handleErrors("Erro ao adicionar treino:", error);
    return null;
  }
}

export async function getUserWorkouts(userEmail: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { workouts: true },
    });

    if (!user) {
      handleErrors("Usuário não encontrado.", null);
      return null;
    }

    const createdWorkouts = user.workouts;

    return createdWorkouts;
  } catch (error) {
    handleErrors("Erro ao obter treinos do usuário:", error);
  }
}

export async function deleteWorkout(userEmail: string, workoutId: string) {
  try {
    await prisma.userExercise.deleteMany({
      where: { workoutId: workoutId },
    });

    await prisma.workout.delete({
      where: { id: workoutId },
    });

    console.log("Treino removido com sucesso.");
  } catch (error) {
    handleErrors("Erro ao excluir treino:", error);
  }
}
