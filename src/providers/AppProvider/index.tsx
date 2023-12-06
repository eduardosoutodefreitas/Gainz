"use client";
import { ExercisesModalProvider } from "@/context/ExercisesModalContext";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <ExercisesModalProvider>
        <WorkoutProvider>
          <NextUIProvider>{children}</NextUIProvider>;
        </WorkoutProvider>
      </ExercisesModalProvider>
    </SessionProvider>
  );
};

export default AppProvider;
