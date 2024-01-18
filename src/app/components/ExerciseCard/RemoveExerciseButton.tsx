"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { Button } from "@nextui-org/react";
interface RemoveExerciseButtonProps {
  exerciseId: string;
  children: React.ReactNode;
}

const RemoveExerciseButton = ({
  children,
  exerciseId,
}: RemoveExerciseButtonProps) => {
  const { removeExercise } = useWorkout();
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
      className='min-w-[35px] absolute right-1 top-1'
    >
      {children}
    </Button>
  );
};

export default RemoveExerciseButton;
