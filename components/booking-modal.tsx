"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../redux/slice/appointmentSlice";
import { toast } from "sonner";
import type { RootState } from "@/redux/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Doctor } from "@/types/doctor";
import type { Appointment } from "@/types/appointment";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

export default function BookingModal({
  isOpen,
  onClose,
  doctor,
}: BookingModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const dispatch = useDispatch();

  // Get all existing appointments
  const existingAppointments = useSelector(
    (state: RootState) => state.appointments.appointments
  );

  // Filter out already booked slots for this doctor
  const availableSlots = doctor.availableSlots.filter((slot) => {
    const slotDate = new Date(slot);
    return (
      // Check if slot is in the future
      slotDate > new Date() &&
      // Check if slot is not already booked
      !existingAppointments.some(
        (appointment) =>
          appointment.doctorId === doctor.id &&
          appointment.dateTime === slot &&
          appointment.status === "confirmed"
      )
    );
  });

  const handleConfirm = () => {
    if (!selectedSlot) return;

    const newAppointment: Appointment = {
      id: `appointment-${Date.now()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location,
      dateTime: selectedSlot,
      status: "confirmed",
    };

    dispatch(addAppointment(newAppointment));

    const appointmentDate = new Date(selectedSlot);
    toast.success("Appointment booked successfully!", {
      description: `Your appointment with Dr. ${
        doctor.name
      } is confirmed for ${appointmentDate.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })}`,
    });
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className="sm:max-w-md"
          aria-labelledby="booking-modal-title"
        >
          <DialogHeader>
            <DialogTitle id="booking-modal-title">
              Book Appointment with Dr. {doctor.name}
            </DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <p className="text-sm text-gray-500 mb-4">
              Select an available time slot for your appointment with Dr.{" "}
              {doctor.name}, {doctor.specialty}
            </p>

            {availableSlots.length > 0 ? (
              <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot}>
                <div className="space-y-2">
                  {availableSlots.map((slot, index) => {
                    const date = new Date(slot);
                    const formattedDate = date.toLocaleString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    });

                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={slot}
                          id={`slot-${index}`}
                          aria-describedby={`slot-desc-${index}`}
                        />
                        <Label
                          htmlFor={`slot-${index}`}
                          id={`slot-desc-${index}`}
                          className="flex-grow cursor-pointer p-2 hover:bg-gray-50 rounded"
                        >
                          {formattedDate}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>
            ) : (
              <p className="text-red-500">
                No available slots for this doctor.
              </p>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={!selectedSlot}>
              Confirm Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
