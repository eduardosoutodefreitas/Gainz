import { Exercise } from "@/types/ExercisesTypes";
import ExerciseCard from "./ExerciseCard";

interface AddExercisesContainerProps {
  exercises: Exercise[];
}

const AddExercisesContainer = ({ exercises }: AddExercisesContainerProps) => {
  return (
    <div className='bg-darkSecondaryBg w-full max-w-md p-5 max-h-[75vh] overflow-y-auto rounded-sm'>
      {exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </div>
  );
};

export default AddExercisesContainer;
