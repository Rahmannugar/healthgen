import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./slice/appointmentSlice";

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
