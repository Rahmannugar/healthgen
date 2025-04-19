"use client";

import type React from "react";

import { useAuth } from "../auth/auth-context";
import Login from "../auth/Login";
import ProfileBar from "./profile-bar";
import Image from "next/image";
import LoadingAnimation from "./loading-animation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-y-[-20px]">
            <Image
              src="/healthgen.png"
              alt="HealthGen Logo"
              width={150}
              height={40}
              className="mr-2"
              priority
            />
            <p className="text-muted-foreground mt-1 hidden sm:block">
              Find and book appointments with top doctors
            </p>
          </div>
          <ProfileBar />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">{children}</div>
    </main>
  );
}
