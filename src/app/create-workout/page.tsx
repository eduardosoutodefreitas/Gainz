import SectionTitle from "../components/SectionTitle/SectionTitle";
import getExercises from "@/services/getExercises";
import { Exercise } from "@/types/ExercisesTypes";
import WorkoutPreview from "./components/WorkoutPreview";
import AddExercisesModal from "../components/AddExercise/AddExerciseModal";
import AddExercisesContainer from "../components/AddExercise/AddExercisesContainer";

const CreateWorkoutPage = async () => {
  const exercises: Exercise[] = await getExercises();

  return (
    //Page Container
    <div className='py-8 sm:py-0 flex-1 flex flex-col justify-center w-full lg:max-w-7xl max-w-4xl mx-auto px-2 xs:px-5'>
      {/* Title container and Add Exercises Button Container*/}
      <div className='w-full p-5 mb-8 flex flex-col gap-5 xs:gap-0 xs:flex-row xs:items-center xs:justify-between rounded-sm bg-darkSecondaryBg'>
        {/* Title container */}
        <div className='w-full text-center xs:text-start'>
          <SectionTitle>Create Workout</SectionTitle>
        </div>
        <AddExercisesModal exercises={exercises} />
      </div>

      <div className='flex items-start justify-between gap-8 w-full'>
        <WorkoutPreview />
        <div className='hidden lg:block'>
          <AddExercisesContainer exercises={exercises} />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkoutPage;
