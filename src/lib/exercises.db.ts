import { WorkoutData } from "@/types/WorkoutDataTypes";
import prisma from "./prisma";

export async function createWorkout(
  userEmail: string,
  workoutData: WorkoutData
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      include: { createdWorkouts: true },
    });
    if (!user) {
      console.error("Usuário não encontrado.");
      return;
    }
    const newWorkout = await prisma.workout.create({
      data: {
        name: workoutData.name,
        exercisesList: workoutData.exercisesList,
        userId: user.id,
      },
    });

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        createdWorkouts: {
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
      include: { createdWorkouts: true },
    });
    if (!user) {
      console.error("Usuário não encontrado.");
      return;
    }

    return user.createdWorkouts;
  } catch (error) {
    console.log(error);
  }
}
