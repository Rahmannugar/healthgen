export interface Doctor {
  id: string | number;
  name: string;
  photo: string;
  specialty: string;
  rating: number;
  location: string;
  availableSlots: string[];
}
