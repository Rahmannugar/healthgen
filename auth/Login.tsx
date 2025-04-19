"use client";

import type React from "react";

import { useState } from "react";
import { useAuth } from "./auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Image from "next/image";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    const success = login(username, password);
    if (!success) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[400px] shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <Image
              src="/healthgen.png"
              alt="HealthGen Logo"
              width={100}
              height={20}
              priority
            />
          </div>
          <CardDescription className="text-center text-sm">
            Sign in to access your healthcare dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="username" className="text-sm">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="h-9"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-9"
              />
            </div>

            <Alert className="bg-blue-50/50 border border-blue-100 dark:bg-blue-950/30 dark:border-blue-900 py-3 px-4 rounded-lg flex items-start gap-3">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <AlertDescription className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                For demo purposes, use:
                <div className="mt-1 font-mono bg-blue-100/50 dark:bg-blue-900/30 px-3 py-1.5 rounded-md text-xs">
                  <div>
                    Username: <span className="font-semibold">admin</span>
                  </div>
                  <div>
                    Password: <span className="font-semibold">admin</span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <Button type="submit" className="w-full h-9">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HealthGen. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
