"use client";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import AddExercisesContainer from "./AddExercisesContainer";
import { Exercise } from "@/types/ExercisesTypes";
import { FaPlus } from "react-icons/fa6";
import { useExercisesModal } from "@/context/ExercisesModalContext";

interface AddExercisesModalProps {
  exercises: Exercise[];
}
export default function AddExercisesModal({
  exercises,
}: AddExercisesModalProps) {
  const { isOpen, onOpen, onOpenChange } = useExercisesModal();
  return (
    <>
      <Button
        className='w-full text-base lg:text-lg font-medium lg:hidden'
        color='secondary'
        radius='sm'
        variant='shadow'
        startContent={<FaPlus size={20} />}
        onPress={onOpen}
      >
        Add Exercise
      </Button>
      <Modal
        className='lg:hidden'
        hideCloseButton={true}
        isOpen={isOpen}
        scrollBehavior='inside'
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <AddExercisesContainer exercises={exercises} />
        </ModalContent>
      </Modal>
    </>
  );
}
