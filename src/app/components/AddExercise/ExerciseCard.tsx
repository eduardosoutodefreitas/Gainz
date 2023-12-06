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
      <div className='relative w-[100px] min-w-[100px] h-[100px]'>
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt={`${exercise.name} icon`}
          className='rounded-md'
          src={exercise.gifUrl}
        />
      </div>
      <div className='self-start w-[50%]'>
        <p className='text-lg capitalize font-medium'>{exercise.name}</p>
        <p className='capitalize text-secondary'>{exercise.target}</p>
      </div>
      <AddExerciseButton exercise={exercise}>
        <FaPlus size={28} />
      </AddExerciseButton>
    </div>
  );
};

export default ExerciseCard;
