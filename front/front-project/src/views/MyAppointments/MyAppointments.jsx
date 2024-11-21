/* eslint-disable no-unused-vars */
import styles from './MyAppointments.module.css';
import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment"
import axios from "axios";

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3000/appointments")
        .then((res) => {
  
          if (Array.isArray(res.data.appointments)) {
            setAppointments(res.data.appointments);
          } else {
            console.error("La propiedad 'appointments' no es un array:", res.data.appointments);
          }
        })
        .catch((error) => {
          console.error("Hubo un error al obtener los turnos:", error);
        });
    }, []);
    
    return (
        <>
        <div className={styles.container}>

          <h1>Reservas</h1>
          <div>
        </div>
            {appointments.map((appointment) => (
              <Appointment 
                key={appointment.id} 
                date={appointment.date} 
                time={appointment.time}
                status={appointment.status}
              />

            ))}
          </div>
        </>
      );
    };
    

export default MyAppointments;