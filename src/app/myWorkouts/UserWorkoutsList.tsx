"use client";

import { Workout } from "@prisma/client";
import WorkoutCard from "../components/WorkoutCard/WorkoutCard";
import { useState } from "react";
import { deleteWorkoutAction } from "../actions/DeleteUserWorkout/_actions";

interface UserWorkoutsListProps {
  workouts: Workout[];
  userEmail: string;
}

const UserWorkoutsList = ({ workouts, userEmail }: UserWorkoutsListProps) => {
  const [userWorkouts, setUserWorkouts] = useState<Workout[]>(workouts);

  const handleDeleteButtonClick = async (workoutId: string) => {
    await deleteWorkoutAction(userEmail, workoutId);
    const updatedWorkouts = userWorkouts.filter(
      (workout) => workout.id !== workoutId
    );
    setUserWorkouts(updatedWorkouts);
  };

  return (
    <div className='w-full p-5 rounded-sm bg-darkSecondaryBg max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-sm scrollbar-track-black'>
      {userWorkouts.length === 0 && (
        <p className='text-center text-lg'>
          No saved workouts. Create new custom workouts by clicking on the{" "}
          <span className='text-secondary font-medium'>
            {"'Create new workout'"}
          </span>{" "}
          button.
        </p>
      )}
      {userWorkouts.map((workout) => (
        <WorkoutCard
          onDelete={() => handleDeleteButtonClick(workout.id)}
          key={workout.id}
          workout={workout}
        />
      ))}
    </div>
  );
};

export default UserWorkoutsList;
