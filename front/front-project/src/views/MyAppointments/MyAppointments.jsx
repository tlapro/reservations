/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./MyAppointments.module.css";
import { useEffect, useState, useContext } from "react";
import Appointment from "../../components/Appointment/Appointment";
import { UsersContext } from "../../context/UsersContext";
import NewAppointment from "../../components/NewAppointment/NewAppointment";
import { useAuth } from "../../context/AuthContext";

const MyAppointments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { appointments, fetchAppointments, addAppointment } = useContext(UsersContext);
  const { user } = useAuth();
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  console.log(user)

  useEffect(() => {
    if (user?.id) {
      fetchAppointments(user.id);
    }
  }, [user?.id]);

  return (
    <div className={styles.container}>
      <h1>Reservas</h1>
      <div>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
          />
        ))}
      </div>
      <button onClick={toggleModal} className={styles.button}>
        Nueva Reserva
      </button>
      <NewAppointment isOpen={isModalOpen} 
      onClose={toggleModal}
      fetchAppointments={fetchAppointments} 
      addAppointment={addAppointment}
      />
    </div>
  );
};

export default MyAppointments;
