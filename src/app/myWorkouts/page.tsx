import { getUserWorkouts } from "@/lib/exercises.db";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { MdChecklist } from "react-icons/md";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import getUserEmail from "@/services/getUserEmail";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import UserWorkoutsList from "./components/UserWorkoutsList";

const MyWorkoutsPage = async () => {
  const { session, userEmail } = await getUserEmail();

  if (!session || !userEmail) {
    console.error("Usuário não encontrado.");
    return <ErrorComponent helpMessage='Please log in to see your workouts' />;
  }
  const userWorkouts = await getUserWorkouts(userEmail);

  return (
    <div className='w-full max-w-4xl pt-8 mx-auto px-5 sm:px-3'>
      <div className='w-full p-5 mb-8 flex flex-col gap-5 xs:gap-0 xs:flex-row xs:items-center xs:justify-between rounded-sm bg-darkSecondaryBg'>
        <div className='w-full text-center xs:text-start'>
          <SectionTitle>My workouts</SectionTitle>
        </div>
        <Link href={"/create-workout"}>
          <Button
            className='text-base lg:text-lg font-medium min-w-[225px] w-full xs:max-w-xs  '
            color='secondary'
            radius='sm'
            variant='shadow'
            startContent={<MdChecklist size={20} />}
          >
            Create new workout
          </Button>
        </Link>
      </div>

      <UserWorkoutsList userEmail={userEmail} workouts={userWorkouts!} />
    </div>
  );
};

export default MyWorkoutsPage;
