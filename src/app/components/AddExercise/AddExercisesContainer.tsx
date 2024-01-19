"use client";
import { Exercise } from "@/types/ExercisesTypes";
import { Select, SelectItem } from "@nextui-org/react";
import { useMemo, useState } from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { FixedSizeList } from "react-window";
import targets from "@/constants/Targets";
import equipments from "@/constants/Equipments";

interface AddExercisesContainerProps {
  exercises: Exercise[];
}

const AddExercisesContainer = ({ exercises }: AddExercisesContainerProps) => {
  const [selectedTarget, setSelectedTarget] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const filterExercises = (target: string, equipment: string) => {
    return exercises.filter(
      (exercise) =>
        (target.length === 0 || exercise.target === target) &&
        (equipment.length === 0 || exercise.equipment === equipment)
    );
  };

  const filteredExercises = useMemo(
    () => filterExercises(selectedTarget, selectedEquipment),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercises, selectedTarget, selectedEquipment]
  );

  const handleTargetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTarget(e.target.value);
  };

  const handleEquipmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEquipment(e.target.value);
  };
  const memoizedTargets = useMemo(() => targets, []);
  const memoizedEquipmentList = useMemo(() => equipments, []);
  return (
    <div className='bg-darkSecondaryBg w-full flex flex-col justify-between max-w-md lg:min-w-[448px] p-5 h-[600px] rounded-sm'>
      <div className='mb-8'>
        <Select
          aria-labelledby='Select a muscle target'
          items={memoizedTargets}
          variant='underlined'
          placeholder='Filter exercises by muscle target'
          className='w-full mb-2 bg'
          onChange={handleTargetChange}
        >
          {(target) => (
            <SelectItem key={target.value}>{target.label}</SelectItem>
          )}
        </Select>
        <Select
          aria-labelledby='Select a muscle target'
          items={memoizedEquipmentList}
          variant='underlined'
          placeholder='Filter exercises by equipment involved'
          className='w-full mb-2 bg'
          onChange={handleEquipmentChange}
        >
          {(equipment) => (
            <SelectItem key={equipment.value}>{equipment.label}</SelectItem>
          )}
        </Select>

        {filteredExercises.length === 0 && (
          <h3 className='text-center text-xl font-medium mt-8'>
            Oops! No exercises match your selected criteria. Please adjust your
            filters and try again.
          </h3>
        )}
      </div>

      {filteredExercises.length > 0 && (
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
      )}
    </div>
  );
};

export default AddExercisesContainer;
