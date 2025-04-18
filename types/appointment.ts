export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  location: string;
  dateTime: string; 
  status: "confirmed" | "cancelled" | "completed";
}
