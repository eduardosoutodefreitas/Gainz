"use client";
import { Button } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa6";
interface DeleteWorkoutButtonProps {
  onDelete: () => {};
}
const DeleteWorkoutButton = ({ onDelete }: DeleteWorkoutButtonProps) => {
  return (
    <Button onClick={onDelete} isIconOnly color='danger' variant='light'>
      <FaTrash size={25} />
    </Button>
  );
};

export default DeleteWorkoutButton;
