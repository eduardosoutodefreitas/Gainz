"use client";
import { createWorkoutAction } from "@/app/actions/CreateUserWorkout/_actions";
import { useWorkout } from "@/context/WorkoutContext";
import { WorkoutData } from "@/types/WorkoutDataTypes";
import { useSession } from "next-auth/react";
import { useState } from "react";

const useWorkoutPreview = () => {
  const [workoutName, setWorkoutName] = useState("");
  const { data } = useSession();
  const { addedExercises } = useWorkout();
  const buttonIsDisabled = !(
    addedExercises.length > 0 && workoutName.trim().length > 0
  );
  const handleSaveWorkoutClick = async () => {
    const newWorkoutExercisesList = addedExercises.map(
      (exercise) => exercise.id
    );
    const workout: WorkoutData = {
      exercisesList: newWorkoutExercisesList,
      name: workoutName,
    };
    const userEmail = data?.user?.email;
    if (!userEmail) {
      console.error("Usuário não encontrado.");
      return;
    }
    await createWorkoutAction(userEmail, workout);
  };

  return {
    workoutName,
    buttonIsDisabled,
    addedExercises,
    setWorkoutName,
    handleSaveWorkoutClick,
  };
};

export default useWorkoutPreview;
