import { Workout } from "@prisma/client";
import Link from "next/link";
import { FaDumbbell } from "react-icons/fa6";
import DeleteWorkoutButton from "../DeleteWorkoutButton/DeleteWorkoutButton";

interface WorkoutCardProps {
  workout: Workout;
  onDelete: () => {};
}
const WorkoutCard = ({ workout, onDelete }: WorkoutCardProps) => {
  return (
    <div className='rounded-md flex justify-between items-center bg-darkSecondaryBg p-5 mb-5 border-b border-b-secondary transition duration-150 hover:bg-default-50'>
      <Link href={`myWorkouts/${workout.id}`}>
        <span className='flex itens-center gap-3'>
          <FaDumbbell size={25} className='text-secondary' />
          <h4 className='text-lg font-medium'>{workout.name}</h4>
        </span>
      </Link>
      <DeleteWorkoutButton onDelete={onDelete} />
    </div>
  );
};

export default WorkoutCard;
