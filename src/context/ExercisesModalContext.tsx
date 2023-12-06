"use client";
import { useDisclosure } from "@nextui-org/react";
import { createContext, useContext, ReactNode } from "react";

interface ExercisesModalProviderProps {
  children: ReactNode;
}

interface ExercisesModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

const ExercisesModalContext = createContext<ExercisesModalContextProps>({
  onOpen: () => {},
  onOpenChange: () => {},
  isOpen: false,
});

const ExercisesModalProvider = ({ children }: ExercisesModalProviderProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ExercisesModalContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
      {children}
    </ExercisesModalContext.Provider>
  );
};

const useExercisesModal = () => {
  const context = useContext(ExercisesModalContext);
  if (!context) {
    throw new Error(
      "useExercisesModal must be used within a ExercisesModalProvider"
    );
  }
  return context;
};

export { ExercisesModalProvider, useExercisesModal, ExercisesModalContext };
