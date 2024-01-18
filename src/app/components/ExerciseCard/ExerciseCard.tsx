import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import RemoveExerciseButton from "./RemoveExerciseButton";
import Image from "next/image";
import { Exercise } from "@/types/ExercisesTypes";
import ExerciseDetailsInputs from "./ExerciseDetailsInputs";
import AddExerciseButton from "@/app/components/AddExercise/AddExerciseButton";

interface ExerciseCardProps {
  exercise: Exercise;
  showRemoveButton?: boolean;
  showAddButton?: boolean;
  showExerciseDetailsInputs?: boolean;
  showMuscleTarget?: boolean;
  imageSize?: "small" | "medium" | "large";
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  showRemoveButton = false,
  showAddButton = false,
  showMuscleTarget = false,
  showExerciseDetailsInputs = false,
  imageSize = "medium",
}: ExerciseCardProps) => {
  const imageSizeClass = {
    small: "w-[100px] h-[100px] ",
    medium: "w-[120px] h-[120px]",
    large: "w-[150px] h-[150px]",
  }[imageSize];
  const sizes = "(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw";

  return (
    <div className='relative flex items-center gap-5 mb-5 w-full p-3 hover:bg-default-50 rounded-md'>
      {showRemoveButton && (
        <RemoveExerciseButton exerciseId={exercise.id}>
          <IoClose size={35} />
        </RemoveExerciseButton>
      )}
      <div className={`relative ${imageSizeClass}`}>
        <Image
          fill
          unoptimized
          style={{ objectFit: "cover" }}
          sizes={sizes}
          alt={`${exercise.name} icon`}
          className='rounded-md'
          src={exercise.gifUrl}
        />
      </div>
      <div className='self-start w-[50%]'>
        <p className='text-xs xs:text-sm sm:text-base md:text-lg capitalize font-medium'>
          {exercise.name}
        </p>
        {showMuscleTarget && (
          <p className='text-sm capitalize font-medium text-secondary'>
            {exercise.target}
          </p>
        )}
        {showExerciseDetailsInputs && (
          <div className='flex justify-between items-center mt-2'>
            <ExerciseDetailsInputs exerciseId={exercise.id} />
          </div>
        )}
      </div>
      {showAddButton && (
        <AddExerciseButton exercise={exercise}>
          <FaPlus size={28} />
        </AddExerciseButton>
      )}
    </div>
  );
};

export default ExerciseCard;
