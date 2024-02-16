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
      <div className='flex items-center justify-between text-xs xs:text-sm sm:text-base w-[100px]'>
        <label htmlFor=''>Reps:</label>
        <input
          type='number'
          className='w-12 bg-transparent border-b border-white p-1 text-center sm:texts-sm'
          defaultValue={reps}
          onChange={(value) => handleRepsChange(Number(value))}
          onBlur={handleBlur}
        />
      </div>
      <div className='flex items-center justify-between text-xs xs:text-sm sm:text-base w-[100px]'>
        <label htmlFor=''>Sets:</label>
        <input
          type='number'
          defaultValue={sets}
          className='w-12 bg-transparent border-b border-white p-1 text-center sm:texts-sm'
          onChange={(value) => handleSetsChange(Number(value))}
          onBlur={handleBlur}
        />
      </div>
    </>
  );
};

export default ExerciseDetailsInputs;
