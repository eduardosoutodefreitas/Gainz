"use client";

import { useWorkoutStore } from "@/store/workout";
import { Button } from "@nextui-org/react";
interface RemoveExerciseButtonProps {
  exerciseId: string;
  children: React.ReactNode;
}

const RemoveExerciseButton = ({
  children,
  exerciseId,
}: RemoveExerciseButtonProps) => {
  const { removeExercise } = useWorkoutStore().actions;
  const handleRemoveExerciseClick = () => {
    removeExercise(exerciseId);
  };
  return (
    <Button
      isIconOnly
      className='px-0'
      color='secondary'
      variant='light'
      aria-label='Take a photo'
      onClick={handleRemoveExerciseClick}
    >
      {children}
    </Button>
  );
};

export default RemoveExerciseButton;
