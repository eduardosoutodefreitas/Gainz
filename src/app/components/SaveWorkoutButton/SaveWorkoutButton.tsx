import { Button } from "@nextui-org/react";
interface SaveWorkoutButtonProps {
  saveWorkout: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}
const SaveWorkoutButton = ({
  saveWorkout,
  isLoading = false,
  isDisabled = false,
}: SaveWorkoutButtonProps) => {
  return (
    <Button
      isLoading={isLoading}
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
