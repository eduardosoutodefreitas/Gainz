"use client";
import { ExercisesModalProvider } from "@/context/ExercisesModalContext";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <ExercisesModalProvider>
        <NextUIProvider>
          {children}
          <Toaster
            position='top-right'
            toastOptions={{
              style: {
                background: "#080808",
                color: "#fff",
                borderRadius: "10px",
              },
              error: {
                style: {
                  borderBottom: "px solid (--var-danger)",
                },
              },
              duration: 2000,
            }}
          />
        </NextUIProvider>
      </ExercisesModalProvider>
    </SessionProvider>
  );
};

export default AppProvider;
