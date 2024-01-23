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
      color='secondary'
      variant='light'
      aria-label='Take a photo'
      onClick={handleRemoveExerciseClick}
      className='min-w-[30px] absolute right-0 top-0'
    >
      {children}
    </Button>
  );
};

export default RemoveExerciseButton;
