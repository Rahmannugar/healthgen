"use client";

import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="w-24 h-24 mb-4 relative">
        <svg
          className="w-full h-full animate-[spin_1s_linear_infinite] text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="red"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Health Gen</h2>
      <p className="text-muted-foreground mb-4">
        Loading your healthcare experience...
      </p>
      <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
    </div>
  );
}
