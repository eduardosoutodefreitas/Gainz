"use client";

import { useExercisesModal } from "@/context/ExercisesModalContext";
import { useWorkout } from "@/context/WorkoutContext";
import { Exercise } from "@/types/ExercisesTypes";
import { Button } from "@nextui-org/react";
interface AddExerciseButtonProps {
  exercise: Exercise;
  children: React.ReactNode;
}

const AddExerciseButton = ({ exercise, children }: AddExerciseButtonProps) => {
  const { addExercise } = useWorkout();
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
