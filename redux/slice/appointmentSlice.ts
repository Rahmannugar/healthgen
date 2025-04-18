import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Appointment } from "@/types/appointment";

interface AppointmentState {
  appointments: Appointment[];
}

const initialState: AppointmentState = {
  appointments: [],
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload
      );
      if (index !== -1) {
        state.appointments[index].status = "cancelled";
      }
    },
  },
});

export const { addAppointment, cancelAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
