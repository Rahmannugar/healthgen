"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "@/theme/theme-provider";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  login: () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("healthgen_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      const userData = { username };
      localStorage.setItem("healthgen_user", JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("healthgen_user");
    setUser(null);
    setIsAuthenticated(false);

    //reset theme
    localStorage.removeItem("healthgen-theme");
    setTheme("system");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
