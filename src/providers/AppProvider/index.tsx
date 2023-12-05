"use client";
import { NextUIProvider } from "@nextui-org/react";
interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default AppProvider;
