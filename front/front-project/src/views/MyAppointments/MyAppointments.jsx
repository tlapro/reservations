/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./MyAppointments.module.css";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Appointment from "../../components/Appointment/Appointment";
import { UsersContext } from "../../context/UsersContext";
import Swal from "sweetalert2";

function showAlert(icon, title, text) {
  Swal.fire({
      icon: icon,
      title: title,
      text: text,
      width: '400px',
      color: '##F5F5DC', 
      background: '#F5F5DC', 
      iconColor: '#3C8C91', 
      confirmButtonColor: '#3C8C91', 
  });
}

const MyAppointments = () => {
  const navigate = useNavigate();
  const { user, userAppointments, renderAppointments } = useContext(UsersContext);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAppointments = async () => {
      setLoading(true);  
      await renderAppointments(user);
      setLoading(false);  
    };
    
    loadAppointments();
  }, [user]);
  
  useEffect(() => {
    if (!loading && userAppointments.length === 0) {
      showAlert('warning', 'No se encontraron reservas', 'No hay reservas para mostrar, has sido redirigido a la página para agendar una nueva reserva.');
      navigate("/agendar");
    }
  }, [loading, userAppointments, navigate]);
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
            index={index + 1}
          />
        ))}
      </div>
      
    </div>
  );
};

export default MyAppointments;
