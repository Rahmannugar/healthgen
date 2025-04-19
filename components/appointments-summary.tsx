"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function AppointmentsSummary() {
  const appointments = useSelector(
    (state: RootState) => state.appointments.appointments
  );

  if (appointments.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No Appointments</h2>
        <p className="text-muted-foreground">
          You haven't booked any appointments yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your Appointments</h2>

      <div className="space-y-4">
        {appointments.map((appointment) => {
          const appointmentDate = new Date(appointment.dateTime);

          return (
            <Card key={appointment.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      Dr. {appointment.doctorName}
                    </h3>
                    <p className="text-muted-foreground">
                      {appointment.specialty}
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                        <span>
                          {appointmentDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                        <span>
                          {appointmentDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
