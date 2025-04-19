"use client";

import { useDispatch, useSelector } from "react-redux";
import { cancelAppointment } from "@/redux/slice/appointmentSlice";
import type { RootState } from "@/redux/store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function AppointmentsSummary() {
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state: RootState) => state.appointments.appointments
  );

  const handleCancelAppointment = (
    appointmentId: string,
    doctorName: string
  ) => {
    dispatch(cancelAppointment(appointmentId));
    toast.success("Appointment cancelled", {
      description: `Your appointment with Dr. ${doctorName} has been cancelled.`,
    });
  };

  if (appointments.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No Appointments</h2>
        <p className="text-muted-foreground">
          You haven&apos;t booked any appointments yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your Appointments</h2>

      <div className="space-y-4">
        {appointments
          .slice()
          .reverse()
          .map((appointment) => {
            const appointmentDate = new Date(appointment.dateTime);
            const isPastAppointment = appointmentDate < new Date();

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
                          <Calendar
                            className="h-4 w-4 mr-2"
                            aria-hidden="true"
                          />
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

                    <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {appointment.status}
                      </span>

                      {appointment.status === "confirmed" &&
                        !isPastAppointment && (
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              handleCancelAppointment(
                                appointment.id.toString(),
                                appointment.doctorName
                              )
                            }
                          >
                            Cancel Appointment
                          </Button>
                        )}
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
