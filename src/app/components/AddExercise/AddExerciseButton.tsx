"use client";

import { useExercisesModal } from "@/context/ExercisesModalContext";
import { useWorkoutStore } from "@/store/workout";
import { Exercise } from "@/types/ExercisesTypes";
import { Button } from "@nextui-org/react";
interface AddExerciseButtonProps {
  exercise: Exercise;
  children: React.ReactNode;
}

const AddExerciseButton = ({ exercise, children }: AddExerciseButtonProps) => {
  const { addExercise } = useWorkoutStore().actions;
  const { onOpenChange, isOpen } = useExercisesModal();
  const handleAddExerciseClick = () => {
    addExercise(exercise);
    if (isOpen === true) {
      onOpenChange();
    }
  };
  return (
    <Button
      isIconOnly
      color='secondary'
      variant='light'
      aria-label='Take a photo'
      onClick={handleAddExerciseClick}
      className='min-w-[28px]'
    >
      {children}
    </Button>
  );
};

export default AddExerciseButton;
