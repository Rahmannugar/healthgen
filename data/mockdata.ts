import type { Doctor } from "@/types/doctor";

// List of medical specialties
export const specialties = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Psychiatry",
  "Gynecology",
  "Ophthalmology",
];

// Generating random available slots for the next 7 days
const generateAvailableSlots = (count: number): string[] => {
  const slots: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 7) + 1);
    date.setHours(
      9 + Math.floor(Math.random() * 8),
      Math.random() > 0.5 ? 0 : 30,
      0,
      0
    );
    slots.push(date.toISOString());
  }

  return slots;
};

// Mock doctors data
export const mockDoctors: Doctor[] = [
  {
    id: 0,
    name: "Sarah Johnson",
    photo: "/doctors/johnson.jpg",
    specialty: "Cardiology",
    rating: 4.8,
    location: "Medical Center, New York",
    availableSlots: generateAvailableSlots(5),
  },
  {
    id: 1,
    name: "Michael Chen",
    photo: "/doctors/chen.jpg",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Health Clinic, Boston",
    availableSlots: generateAvailableSlots(3),
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    photo: "/doctors/rodriguez.jpg",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Children's Hospital, Chicago",
    availableSlots: generateAvailableSlots(4),
  },
  {
    id: 3,
    name: "David Kim",
    photo: "/doctors/kim.jpg",
    specialty: "Neurology",
    rating: 4.6,
    location: "Neuroscience Center, San Francisco",
    availableSlots: generateAvailableSlots(2),
  },
  {
    id: 4,
    name: "Jessica Patel",
    photo: "/doctors/patel.jpg",
    specialty: "Orthopedics",
    rating: 4.5,
    location: "Sports Medicine Clinic, Los Angeles",
    availableSlots: generateAvailableSlots(6),
  },
  {
    id: 5,
    name: "Robert Wilson",
    photo: "/doctors/wilson.jpg",
    specialty: "Psychiatry",
    rating: 4.7,
    location: "Mental Health Center, Seattle",
    availableSlots: [],
  },
  {
    id: 6,
    name: "Maria Garcia",
    photo: "/doctors/garcia.jpg",
    specialty: "Gynecology",
    rating: 4.8,
    location: "Women's Health Clinic, Miami",
    availableSlots: generateAvailableSlots(4),
  },
  {
    id: 7,
    name: "James Taylor",
    photo: "/doctors/taylor.jpg",
    specialty: "Ophthalmology",
    rating: 4.6,
    location: "Vision Care Center, Denver",
    availableSlots: generateAvailableSlots(3),
  },
  {
    id: 8,
    name: "Sophia Lee",
    photo: "/doctors/lee.jpg",
    specialty: "Cardiology",
    rating: 4.9,
    location: "Heart Institute, Houston",
    availableSlots: generateAvailableSlots(5),
  },
];
