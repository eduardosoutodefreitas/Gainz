import { Exercise } from "@/types/ExercisesTypes";
import { create } from "zustand";

type ActionProps = {
  addExercise: (exercise: Exercise) => void;
  updateExerciseDetails: (
    exerciseId: string,
    details: { sets?: number; reps?: number }
  ) => void;
  removeExercise: (exerciseId: string) => void;
  clearAddedExercises: () => void;
};
type StoreProps = {
  state: {
    addedExercises: Exercise[];
  };
  actions: ActionProps;
};

export const useWorkoutStore = create<StoreProps>((set) => ({
  state: {
    addedExercises: [],
  },
  actions: {
    addExercise: (exercise) =>
      set((prevState) => ({
        state: {
          addedExercises: [...prevState.state.addedExercises, exercise],
        },
      })),
    clearAddedExercises: () =>
      set({
        state: {
          addedExercises: [],
        },
      }),
    removeExercise: (exerciseId) =>
      set((prevState) => {
        const indexToRemove = prevState.state.addedExercises.findIndex(
          (exercise) => exercise.id === exerciseId
        );
        if (indexToRemove !== -1) {
          const updatedExercises = [...prevState.state.addedExercises];
          updatedExercises.splice(indexToRemove, 1);
          return { state: { addedExercises: updatedExercises } };
        }
        return prevState;
      }),
    updateExerciseDetails: (exerciseId, details) =>
      set((prevState) => {
        const updatedExercises = prevState.state.addedExercises.map(
          (exercise) =>
            exercise.id === exerciseId ? { ...exercise, ...details } : exercise
        );
        return {
          state: {
            addedExercises: updatedExercises,
          },
        };
      }),
  },
}));
