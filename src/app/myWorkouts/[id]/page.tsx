import ErrorComponent from "@/app/components/ErrorComponent/ErrorComponent";
import SectionTitle from "@/app/components/Heading";
import { getUserWorkouts } from "@/lib/exercises.db";
import getExercises from "@/services/getExercises";
import getUserEmail from "@/services/getUserEmail";
import getUserWorkoutExercises from "@/services/getUserWorkoutExercises";
import { Exercise } from "@/types/ExercisesTypes";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaDumbbell } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

interface WorkoutPageProps {
  params: {
    id: string;
  };
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const exercises: Exercise[] = await getExercises();

  const { session, userEmail } = await getUserEmail();
  if (!session || !userEmail) {
    console.error("Usuário não encontrado.");
    return <ErrorComponent helpMessage='Please log in to see your workouts' />;
  }
  const userWorkouts = await getUserWorkouts(userEmail);

  const workout = userWorkouts?.find((workout) => workout.id === params.id);
  if (!workout) {
    return <ErrorComponent hasBackButton helpMessage='Workout not found' />;
  }
  const userWorkoutExercises = getUserWorkoutExercises(
    workout.exercisesList,
    exercises
  );

  return (
    <div className='w-full pt-8 px-5 sm:px-3'>
      <div className='w-full max-h-[700px] rounded-md max-w-4xl mx-auto p-5 bg-darkSecondaryBg'>
        <Link href={"/myWorkouts"}>
          <Button
            size='lg'
            variant='light'
            startContent={
              <IoMdArrowRoundBack
                className='group-hover:-translate-x-1 transition-all duration-300'
                size={35}
              />
            }
          >
            Back to workouts
          </Button>
        </Link>
        <div className='flex items-center gap-3 my-3'>
          <FaDumbbell size={30} className='text-secondary' />
          <SectionTitle>{workout.name}</SectionTitle>
        </div>
        <div className='max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
          {userWorkoutExercises.map((exercise, index) => (
            <div
              key={`user exercise ${exercise.id} ${index}`}
              className='relative flex items-center gap-5 mb-5 w-full p-3 hover:bg-default-50 rounded-md'
            >
              <div className='relative w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]'>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
