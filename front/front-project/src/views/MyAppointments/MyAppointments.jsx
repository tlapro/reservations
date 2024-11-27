/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./MyAppointments.module.css";
import { useEffect, useContext } from "react";
import Appointment from "../../components/Appointment/Appointment";
import { UsersContext } from "../../context/UsersContext";



const MyAppointments = () => {
  
  const { user, userAppointments, renderAppointments } = useContext(UsersContext);
  
  useEffect(() => {
      renderAppointments(user);
  }, user, renderAppointments);

  return (
    <div className={styles.container}>
      <h1>Reservas</h1>
      <div>
        {userAppointments.map((appointment, index) => (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            index={index}
          />
        ))}
      </div>
      
    </div>
  );
};

export default MyAppointments;
