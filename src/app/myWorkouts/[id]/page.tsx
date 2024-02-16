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
    <div className='w-full flex-1 flex flex-col justify-center px-5'>
      <div className='w-full max-h-[700px] rounded-md max-w-4xl mx-auto p-3 xs:p-5 bg-darkSecondaryBg'>
        <div className='flex flex-col xs:justify-between xs:flex-row justify-center items-center mb-5 gap-5'>
          <Link
            href={"/myWorkouts"}
            className='flex items-center gap-2 group text-sm xs:text-base'
          >
            <IoMdArrowRoundBack
              className='group-hover:-translate-x-1 transition-all duration-300'
              size={25}
            />
            Back to workouts
          </Link>
          <h2 className='capitalize text-xl sm:text-2xl font-medium'>
            {workout?.name}
          </h2>
        </div>
        <div className='max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
          {workoutExercises.map((exercise, index) => {
            console.log(exercise);
            return (
              <div key={`user exercise ${exercise.id} ${index}`}>
                <ExerciseCard
                  extraStyles='pr-5'
                  exercise={exercise}
                  showExerciseDetails
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
