import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import RemoveExerciseButton from "./RemoveExerciseButton";
import Image from "next/image";
import { Exercise } from "@/types/ExercisesTypes";
import ExerciseDetailsInputs from "./ExerciseDetailsInputs";
import AddExerciseButton from "@/app/components/AddExercise/AddExerciseButton";
import ExerciseDetails from "./ExerciseDetails";

interface ExerciseCardProps {
  exercise: Exercise;
  showRemoveButton?: boolean;
  showAddButton?: boolean;
  showExerciseDetailsInputs?: boolean;
  showMuscleTarget?: boolean;
  showExerciseDetails?: boolean;
  extraStyles?: string;
  imageSize?: "small" | "medium" | "large";
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  extraStyles = "",
  showRemoveButton = false,
  showAddButton = false,
  showMuscleTarget = false,
  showExerciseDetailsInputs = false,
  showExerciseDetails = false,
  imageSize = "medium",
}: ExerciseCardProps) => {
  const imageSizeClass = {
    small: "xs:w-[100px] h-auto w-[80px] aspect-square",
    medium: "sm:w-[120px] h-auto xs:w-[100px] min-w-[90px] aspect-square",
    large: "w-[150px] h-auto aspect-square",
  }[imageSize];
  const sizes = "(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw";

  return (
    <div
      className={`${extraStyles} relative flex items-center gap-5 mb-8 xs:mb-5 w-full hover:bg-default-50 rounded-md`}
    >
      <div className={`relative flex-3 ${imageSizeClass}`}>
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
      <div className='self-start flex-1 flex-wrap'>
        <p className='text-xs xs:text-sm sm:text-base md:text-lg capitalize font-medium'>
          {exercise.name}
        </p>
        {showMuscleTarget && (
          <p className='text-sm capitalize font-medium text-secondary'>
            {exercise.target}
          </p>
        )}
        {showExerciseDetails && (
          <div className='flex flex-col xs:flex-row gap-2 xs:justify-between items-start xs:items-center mt-2'>
            <ExerciseDetails reps={exercise.reps} sets={exercise.sets} />
          </div>
        )}
        {showExerciseDetailsInputs && (
          <div className='flex flex-col xs:flex-row gap-2 xs:justify-between items-start xs:items-center mt-2'>
            <ExerciseDetailsInputs exerciseId={exercise.id} />
          </div>
        )}
      </div>
      {showRemoveButton && (
        <div className='self-start justify-self-end'>
          <RemoveExerciseButton exerciseId={exercise.id}>
            <IoClose className='text-2xl xs:text-3xl' />
          </RemoveExerciseButton>
        </div>
      )}
      {showAddButton && (
        <div className=''>
          <AddExerciseButton exercise={exercise}>
            <FaPlus size={28} />
          </AddExerciseButton>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
