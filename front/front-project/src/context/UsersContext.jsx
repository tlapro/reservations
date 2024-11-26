/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = useCallback(async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${userId}`);
      if (Array.isArray(res.data.user.appointments)) {
        setAppointments(res.data.user.appointments);
      } else {
        console.error("La propiedad 'appointments' no es un array:", res.data.user.appointments);
      }
    } catch (error) {
      console.error("Error al obtener las citas:", error);
    }
  }, []);

  const addAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  const cancelAppointment = useCallback(async (appointmentId) => {
    console.log(appointmentId)
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`);

    } catch (error) {
      console.error("Error al cancelar la reserva", error);
    }
  }, []);

  const value = {
    user,
    setUser,
    appointments,
    fetchAppointments,
    addAppointment, 
    cancelAppointment,
  };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};
