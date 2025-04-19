"use client";

import { useState, useEffect } from "react";
import DoctorCard from "./doctor-card";
import FilterBar from "./filter-bar";
import BookingModal from "./booking-modal";
import type { Doctor } from "@/types/doctor";
import { mockDoctors } from "../data/mockdata";

export default function DoctorDirectory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [specialty, setSpecialty] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  // Filter doctors based on selected filters
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty =
      specialty === "all" || doctor.specialty === specialty;
    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && doctor.availableSlots.length > 0);

    return matchesSpecialty && matchesAvailability;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div>
      <FilterBar
        specialty={specialty}
        setSpecialty={setSpecialty}
        availability={availability}
        setAvailability={setAvailability}
      />

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No doctors match your filters. Please try different criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={() => handleBookAppointment(doctor)}
            />
          ))}
        </div>
      )}

      {selectedDoctor && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
}
