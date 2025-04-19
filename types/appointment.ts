export interface Appointment {
  id: string | number;
  doctorId: string | number;
  doctorName: string;
  specialty: string;
  location: string;
  dateTime: string;
  status: "confirmed" | "cancelled" | "completed";
}
