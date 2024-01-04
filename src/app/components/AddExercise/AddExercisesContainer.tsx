"use client";
import { Exercise } from "@/types/ExercisesTypes";
import targets from "@/constants/targets";
import { Select, SelectItem } from "@nextui-org/react";
import { useMemo, useState } from "react";
import ExerciseCard from "../ExerciseCard.tsx/ExerciseCard";
import { FixedSizeList } from "react-window";

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
  const filteredExercises = useMemo(
    () => filterExercisesByTarget(selectedTarget),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercises, selectedTarget]
  );
  const memoizedTargets = useMemo(() => targets, []);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(e.target.value);
  };

  return (
    <div className='bg-darkSecondaryBg w-full flex flex-col justify-between max-w-md lg:min-w-[448px] p-5 h-[600px] rounded-sm'>
      <Select
        aria-labelledby='Select a muscle target'
        items={memoizedTargets}
        variant='underlined'
        placeholder='Filter exercises by muscle target'
        className='w-full mb-8 bg'
        onChange={handleSelectionChange}
      >
        {(target) => <SelectItem key={target.value}>{target.label}</SelectItem>}
      </Select>

      <FixedSizeList
        height={480}
        itemCount={filteredExercises.length}
        itemSize={120}
        width='100%'
        className='scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'
      >
        {({ index, style }) => (
          <div key={filteredExercises[index].id} style={style}>
            <ExerciseCard
              showMuscleTarget
              exercise={filteredExercises[index]}
              imageSize='small'
              showAddButton
            />
          </div>
        )}
      </FixedSizeList>
    </div>
  );
};

export default AddExercisesContainer;
