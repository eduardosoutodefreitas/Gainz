"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
interface ExerciseDetailsInputs {
  exerciseId: string;
}

const ExerciseDetailsInputs = ({ exerciseId }: ExerciseDetailsInputs) => {
  const { updateExerciseDetails } = useWorkout();
  const [sets, setSets] = useState<number>(4);
  const [reps, setReps] = useState<number>(12);

  const handleSetsChange = (value: number) => setSets(value);
  const handleRepsChange = (value: number) => setReps(value);

  const handleBlur = () => {
    updateExerciseDetails(exerciseId, { sets, reps });
  };

  return (
    <>
      <Input
        type='number'
        label='Reps:'
        defaultValue='12'
        variant='flat'
        className='text-sm max-w-[85px] text-center items-center flex justify-center'
        labelPlacement='outside-left'
        value={String(reps)}
        onValueChange={(value) => handleRepsChange(Number(value))}
        onBlur={handleBlur}
      />
      <Input
        type='number'
        label='Sets:'
        defaultValue='4'
        variant='flat'
        labelPlacement='outside-left'
        className='max-w-[85px] text-center text-sm'
        value={String(sets)}
        onValueChange={(value) => handleSetsChange(Number(value))}
        onBlur={handleBlur}
      />
    </>
  );
};

export default ExerciseDetailsInputs;
