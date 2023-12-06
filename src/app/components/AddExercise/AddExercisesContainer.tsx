"use client";
import { Exercise } from "@/types/ExercisesTypes";
import ExerciseCard from "./ExerciseCard";
import targets from "@/constants/targets";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

interface AddExercisesContainerProps {
  exercises: Exercise[];
}

const AddExercisesContainer = ({ exercises }: AddExercisesContainerProps) => {
  const [selectedTarget, setSelectedTarget] = useState("");

  const filterExercisesByTarget = (target: string) => {
    if (target.length > 0) {
      return exercises.filter((exercise) => exercise.target === target);
    }
    return exercises;
  };
  const filteredExercises = filterExercisesByTarget(selectedTarget);
  const handleSelectionChange = (e: any) => {
    setSelectedTarget(e.target.value);
  };

  return (
    <div className='bg-darkSecondaryBg w-full flex flex-col justify-between max-w-md lg:min-w-[448px] p-5 h-[600px] rounded-sm'>
      <Select
        aria-labelledby='Select a muscle target'
        items={targets}
        variant='underlined'
        placeholder='Filter exercises by muscle target'
        className='w-full mb-8 bg'
        onChange={handleSelectionChange}
      >
        {(target) => <SelectItem key={target.value}>{target.label}</SelectItem>}
      </Select>
      <div className='max-h-[80%]  overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
        {filteredExercises.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))}
      </div>
    </div>
  );
};

export default AddExercisesContainer;
