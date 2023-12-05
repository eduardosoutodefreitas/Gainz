import { Exercise } from "@/types/ExercisesTypes";
import Image from "next/image";
import AddExerciseButton from "./AddExerciseButton";
import { FaPlus } from "react-icons/fa6";

interface ExerciseProps {
  exercise: Exercise;
}
const ExerciseCard = ({ exercise }: ExerciseProps) => {
  return (
    <div className='flex items-center gap-5 mb-5 w-full p-3 hover:bg-default-50 rounded-md'>
      <AddExerciseButton exercise={exercise}>
        <FaPlus size={28} />
      </AddExerciseButton>
      <div className='relative min-w-[100px] min-h-[100px]'>
        <Image
          fill
          alt={`${exercise.name} icon`}
          className='rounded-md'
          src={exercise.gifUrl}
        />
      </div>
      <div className='self-start'>
        <p className='text-lg capitalize font-medium'>{exercise.name}</p>
        <p className='capitalize text-secondary'>{exercise.target}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
