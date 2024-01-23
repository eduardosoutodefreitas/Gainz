"use client";

import { useWorkoutStore } from "@/store/workout";
import { Input } from "@nextui-org/react";
import { useState } from "react";
interface ExerciseDetailsInputs {
  exerciseId: string;
}

const ExerciseDetailsInputs = ({ exerciseId }: ExerciseDetailsInputs) => {
  const { updateExerciseDetails } = useWorkoutStore().actions;
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
        size='sm'
        className='w-[75px] xs:max-w-[85px] text-center items-center flex justify-center text-xs sm:texts-sm'
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
        size='sm'
        labelPlacement='outside-left'
        className='w-[75px] xs:max-w-[85px] text-center text-xs sm:texts-sm'
        value={String(sets)}
        onValueChange={(value) => handleSetsChange(Number(value))}
        onBlur={handleBlur}
      />
    </>
  );
};

export default ExerciseDetailsInputs;
