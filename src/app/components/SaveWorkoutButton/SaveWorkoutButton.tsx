import { Button } from "@nextui-org/react";
interface SaveWorkoutButtonProps {
  saveWorkout: () => void;
  isDisabled: boolean;
}
const SaveWorkoutButton = ({
  saveWorkout,
  isDisabled,
}: SaveWorkoutButtonProps) => {
  return (
    <Button
      color='secondary'
      isDisabled={isDisabled}
      onClick={saveWorkout}
      radius='sm'
      variant='shadow'
    >
      Save Workout
    </Button>
  );
};

export default SaveWorkoutButton;
