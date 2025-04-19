"use client";

import type React from "react";

import { useEffect, useState } from "react";
import AuthContextProvider from "./auth-context";
import LoadingAnimation from "../components/loading-animation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return <AuthContextProvider>{children}</AuthContextProvider>;
}
