"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: () => void;
}

export default function DoctorCard({
  doctor,
  onBookAppointment,
}: DoctorCardProps) {
  const { name, photo, specialty, rating, location, availableSlots } = doctor;

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={photo || "/placeholder.svg?height=80&width=80"}
              alt={`Dr. ${name}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          <div>
            <h2
              className="text-lg font-semibold"
              id={`doctor-name-${doctor.id}`}
            >
              Dr. {name}
            </h2>
            <p className="text-muted-foreground">{specialty}</p>

            <div className="flex items-center mt-1">
              <Star
                className="h-4 w-4 text-yellow-500 mr-1"
                aria-hidden="true"
              />
              <span className="text-sm">
                {rating} <span className="sr-only">rating</span>
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-1">{location}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Availability</h3>
          {availableSlots.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {availableSlots.slice(0, 3).map((slot, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {new Date(slot).toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </Badge>
              ))}
              {availableSlots.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{availableSlots.length - 3} more
                </Badge>
              )}
            </div>
          ) : (
            <p className="text-sm text-red-500">No available slots</p>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onBookAppointment}
          className="w-full"
          disabled={availableSlots.length === 0}
          aria-labelledby={`doctor-name-${doctor.id}`}
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}
