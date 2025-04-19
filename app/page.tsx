import { Suspense } from "react";
import DoctorDirectory from "@/components/doctor-directory";
import AppointmentsSummary from "@/components/appointments-summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppProvider } from "@/redux/provider";
import LoadingAnimation from "@/components/loading-animation";
import AuthProvider from "@/auth/auth-provider";
import Dashboard from "@/components/dashboard";
import { ThemeProvider } from "@/theme/theme-provider";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="healthgen-theme">
      <AppProvider>
        <AuthProvider>
          <Suspense fallback={<LoadingAnimation />}>
            <Dashboard>
              <Tabs defaultValue="doctors" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
                  <TabsTrigger value="appointments">
                    My Appointments
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="doctors">
                  <Suspense fallback={<div>Loading doctors...</div>}>
                    <DoctorDirectory />
                  </Suspense>
                </TabsContent>

                <TabsContent value="appointments">
                  <Suspense fallback={<div>Loading appointments...</div>}>
                    <AppointmentsSummary />
                  </Suspense>
                </TabsContent>
              </Tabs>
            </Dashboard>
          </Suspense>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
