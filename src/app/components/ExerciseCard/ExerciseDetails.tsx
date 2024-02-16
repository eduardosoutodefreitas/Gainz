interface ExerciseDetailsProps {
  sets: number;
  reps: number;
}
const ExerciseDetails = ({ reps, sets }: ExerciseDetailsProps) => {
  return (
    <>
      <p className='text-xs sm:text-lg xs:text-sm'>
        Reps: <span className='text-secondary-500 text-base'>{reps}</span>
      </p>
      <p className='text-xs sm:text-lg xs:text-sm'>
        Sets: <span className='text-secondary-500 text-base'>{sets}</span>
      </p>
    </>
  );
};

export default ExerciseDetails;
