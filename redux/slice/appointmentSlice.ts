import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Appointment } from "@/types/appointment";

interface AppointmentState {
  appointments: Appointment[];
}

// Load initial state from localStorage
const initialState: AppointmentState = {
  appointments:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("healthgen_appointments") || "[]")
      : [],
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
      // Save appointments to localStorage
      localStorage.setItem(
        "healthgen_appointments",
        JSON.stringify(state.appointments)
      );
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload
      );
      if (index !== -1) {
        state.appointments[index].status = "cancelled";
        // Save changes to localStorage
        localStorage.setItem(
          "healthgen_appointments",
          JSON.stringify(state.appointments)
        );
      }
    },
  },
});

export const { addAppointment, cancelAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
