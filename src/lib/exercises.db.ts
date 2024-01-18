import { WorkoutData } from "@/types/WorkoutDataTypes";
import prisma from "./prisma";
import { Workout } from "@prisma/client";

export async function createWorkout(
  userEmail: string,
  workoutData: WorkoutData
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      include: { workouts: true },
    });

    if (!user) {
      console.error("Usuário não encontrado.");
      return;
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
      where: {
        id: user.id,
      },
      data: {
        workouts: {
          connect: {
            id: newWorkout.id,
          },
        },
      },
    });

    console.log("Usuário com novos treinos:", updatedUser);
    return newWorkout;
  } catch (error) {
    console.error("Erro ao adicionar treino:", error);
    throw error;
  }
}

export async function getUserWorkouts(userEmail: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      include: { workouts: true },
    });
    if (!user) {
      console.error("Usuário não encontrado.");
      return;
    }

    const createdWorkouts = user.workouts;

    return createdWorkouts;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteWorkout(userEmail: string, workoutId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      console.error("Usuário não encontrado.");
      return;
    }

    // Exclua o treino
    await prisma.workout.delete({
      where: {
        id: workoutId,
      },
    });

    console.log("Treino removido com sucesso.");
  } catch (error) {
    console.error("Erro ao excluir treino:", error);
    throw error;
  }
}
