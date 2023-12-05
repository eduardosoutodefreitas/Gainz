"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>;
    </SessionProvider>
  );
};

export default AppProvider;
