import ErrorComponent from "@/app/components/ErrorComponent/ErrorComponent";
import ExerciseCard from "@/app/components/ExerciseCard/ExerciseCard";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import useUserWorkout from "@/hooks/useUserWorkout";
import Link from "next/link";
import { FaDumbbell } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

interface WorkoutPageProps {
  params: {
    id: string;
  };
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { userExercises, workout, workoutExercises, session, userEmail } =
    await useUserWorkout(params.id);
  if (!session || !userEmail) {
    console.error("Usuário não encontrado.");
    return <ErrorComponent helpMessage='Please log in to see your workouts' />;
  } //Verifica login

  if (!userExercises) {
    return <ErrorComponent hasBackButton helpMessage='Workout not found' />;
  }
  return (
    <div className='w-full pt-8 px-5 sm:px-3'>
      <div className='w-full max-h-[700px] rounded-md max-w-4xl mx-auto p-5 bg-darkSecondaryBg'>
        <Link href={"/myWorkouts"} className='flex items-center gap-2 group'>
          <IoMdArrowRoundBack
            className='group-hover:-translate-x-1 transition-all duration-300'
            size={25}
          />
          Back to workouts
        </Link>
        <div className='flex items-center gap-3 my-3'>
          <FaDumbbell size={30} className='text-secondary' />
          <SectionTitle>{workout?.name}</SectionTitle>
        </div>
        <div className='max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
          {workoutExercises.map((exercise, index) => {
            console.log(exercise);
            return (
              <div key={`user exercise ${exercise.id} ${index}`}>
                <ExerciseCard exercise={exercise} />
                <p>{exercise.reps}</p>
                <p>{exercise.sets}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
