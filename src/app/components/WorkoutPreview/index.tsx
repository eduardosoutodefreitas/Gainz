"use client";
import { Input } from "@nextui-org/react";
import PreviewExerciseCard from "./PreviewExerciseCard";
import SaveWorkoutButton from "../SaveWorkoutButton/SaveWorkoutButton";
import useWorkoutPreview from "@/hooks/useWorkoutPreview";

const WorkoutPreview = () => {
  const {
    workoutName,
    addedExercises,
    buttonIsDisabled,
    setWorkoutName,
    handleSaveWorkoutClick,
  } = useWorkoutPreview();

  return (
    <div className='bg-darkSecondaryBg flex flex-col justify-between lg:max-w-3xl w-full rounded-sm h-[600px] p-5 gap-8'>
      <Input
        type='text'
        label='Workout name'
        isRequired={true}
        placeholder='Give a name to your workout'
        variant='underlined'
        value={workoutName}
        onValueChange={setWorkoutName}
      />
      <div className='h-[80%] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
        {addedExercises.map((exercise) => (
          <PreviewExerciseCard key={exercise.name} exercise={exercise} />
        ))}
      </div>
      <SaveWorkoutButton
        saveWorkout={handleSaveWorkoutClick}
        isDisabled={buttonIsDisabled}
      />
    </div>
  );
};

export default WorkoutPreview;
