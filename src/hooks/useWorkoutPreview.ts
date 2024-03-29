"use client";
import { createWorkoutAction } from "@/app/actions/CreateUserWorkout/_actions";
import { useWorkoutStore } from "@/store/workout";
import { WorkoutData } from "@/types/WorkoutDataTypes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const useWorkoutPreview = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const { data } = useSession();
  const {
    state: { addedExercises },
    actions: { clearAddedExercises },
  } = useWorkoutStore();
  const isLoggedIn = !!data?.user;

  const showLoginToast = () => {
    toast.error("Please login to save your workouts");
  };

  const handleSaveWorkoutClick = async () => {
    if (!isLoggedIn) {
      showLoginToast();
      return;
    }

    try {
      setIsLoading(true);
      const newWorkoutExercisesList = addedExercises.map((exercise) => ({
        name: exercise.name,
        exerciseId: exercise.id,
        sets: exercise.sets,
        reps: exercise.reps,
      }));
      const workout: WorkoutData = {
        name: workoutName,
        userExercises: newWorkoutExercisesList,
      };

      const userEmail = data?.user?.email;
      if (!userEmail) {
        console.error("Usuário não encontrado.");
        return;
      }

      await createWorkoutAction(userEmail, workout);
      toast.success("Workout created successfully!");
      push("/myWorkouts");
    } catch (error) {
      console.error("Error saving workout:", error);
      toast.error("Error saving workout. Please try again later.");
    } finally {
      setIsLoading(false);
      setWorkoutName("");
      clearAddedExercises();
    }
  };

  return {
    workoutName,
    addedExercises,
    buttonIsDisabled: !(
      addedExercises.length > 0 && workoutName.trim().length > 0
    ),
    isLoading,
    setWorkoutName,
    handleSaveWorkoutClick,
  };
};

export default useWorkoutPreview;
