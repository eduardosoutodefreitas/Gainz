"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { Exercise } from "@/types/ExercisesTypes";
import { Button } from "@nextui-org/react";
interface AddExerciseButtonProps {
  exercise: Exercise;
  children: React.ReactNode;
}

const AddExerciseButton = ({ exercise, children }: AddExerciseButtonProps) => {
  const { addExercise } = useWorkout();
  return (
    <div className='min-w-[28px]'>
      <Button
        isIconOnly
        color='secondary'
        variant='light'
        aria-label='Take a photo'
        onClick={() => addExercise(exercise)}
      >
        {children}
      </Button>
    </div>
  );
};

export default AddExerciseButton;
