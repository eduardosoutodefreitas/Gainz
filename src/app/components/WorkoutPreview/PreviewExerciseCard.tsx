import Image from "next/image";
import { Exercise } from "@/types/ExercisesTypes";
import { IoClose } from "react-icons/io5";
import RemoveExerciseButton from "../RemoveExerciseButton/RemoveExerciseButton";
interface PreviewExerciseCardProps {
  exercise: Exercise;
}
const PreviewExerciseCard = ({ exercise }: PreviewExerciseCardProps) => {
  return (
    <div className='relative flex items-center gap-5 mb-5 w-full p-3 hover:bg-default-50 rounded-md'>
      <RemoveExerciseButton exerciseId={exercise.id}>
        <IoClose size={35} />
      </RemoveExerciseButton>
      <div className='relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]'>
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt={`${exercise.name} icon`}
          className='rounded-md'
          src={exercise.gifUrl}
        />
      </div>
      <p className='text-lg sm:text-xl capitalize font-medium w-1/2'>
        {exercise.name}
      </p>
    </div>
  );
};

export default PreviewExerciseCard;
