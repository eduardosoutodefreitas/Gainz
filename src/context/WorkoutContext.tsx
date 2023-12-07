"use client";
import { Exercise } from "@/types/ExercisesTypes";
import { createContext, useState, useContext, ReactNode } from "react";

interface WorkoutProviderProps {
  children: ReactNode;
}

interface WorkoutContextProps {
  addedExercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (exerciseId: string) => void;
  clearAddedExercises: () => void;
}

const WorkoutContext = createContext<WorkoutContextProps>({
  addExercise: () => {},
  removeExercise: () => {},
  clearAddedExercises: () => {},
  addedExercises: [],
});

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const [addedExercises, setAddedExercises] = useState<Exercise[]>([]);

  const addExercise = (exercise: Exercise) => {
    setAddedExercises([...addedExercises, exercise]);
  };

  const removeExercise = (exerciseId: string) => {
    const indexToRemove = addedExercises.findIndex(
      (exercise) => exercise.id === exerciseId
    );

    if (indexToRemove !== -1) {
      const updatedExercises = [...addedExercises];
      updatedExercises.splice(indexToRemove, 1);
      setAddedExercises(updatedExercises);
    }
  };
  const clearAddedExercises = () => {
    setAddedExercises([]);
  };

  return (
    <WorkoutContext.Provider
      value={{
        addedExercises,
        addExercise,
        removeExercise,
        clearAddedExercises,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { WorkoutProvider, useWorkout, WorkoutContext };
