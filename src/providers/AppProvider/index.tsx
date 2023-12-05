"use client";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <WorkoutProvider>
        <NextUIProvider>{children}</NextUIProvider>;
      </WorkoutProvider>
    </SessionProvider>
  );
};

export default AppProvider;
