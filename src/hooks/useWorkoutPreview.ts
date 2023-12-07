"use client";
import { createWorkoutAction } from "@/app/actions/CreateUserWorkout/_actions";
import { useWorkout } from "@/context/WorkoutContext";
import { WorkoutData } from "@/types/WorkoutDataTypes";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

const useWorkoutPreview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const { data } = useSession();
  const { addedExercises, clearAddedExercises } = useWorkout();
  const buttonIsDisabled = !(
    addedExercises.length > 0 && workoutName.trim().length > 0
  );
  const isLoggedIn = !!data?.user;
  const showLoginToast = () => {
    toast.error("Please login to save your workouts");
  };
  const handleSaveWorkoutClick = async () => {
    if (isLoggedIn) {
      try {
        setIsLoading(true);
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
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setWorkoutName("");
        clearAddedExercises();
        toast.success("Workout created successfully!");
      }
    } else {
      showLoginToast();
    }
  };

  return {
    workoutName,
    buttonIsDisabled,
    addedExercises,
    isLoading,
    isLoggedIn,
    setWorkoutName,
    handleSaveWorkoutClick,
  };
};

export default useWorkoutPreview;
