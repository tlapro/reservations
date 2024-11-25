/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UsersContext } from "../../context/UsersContext";
import { useContext, useState } from "react";
import styles from "./Appointment.module.css";
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

const Appointment = ({ id, date, time, status }) => {
    const { cancelAppointment } = useContext(UsersContext);

    // Estado local para el status de la cita
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleOnClick = async () => {
        try {
            // Llamar la función para cancelar la cita
            await cancelAppointment(id);
            showAlert('success', 'Reserva cancelada', 'Tu reserva se canceló con éxito');
            setCurrentStatus("cancelled");
        } catch (error) {
            console.error("Error al cancelar la cita:", error);
        }
    };

    const [dateSplit, timeFormat] = date.split("T");
    const dateFormat = dateSplit.split("-").reverse().join("/");

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h4>Hora: {time}</h4>
                    <h4>Fecha: {dateFormat}</h4>
                    
                    <h4 className={styles[currentStatus]}>
                        {currentStatus === "active" ? "ACTIVA" : "CANCELADA"}
                    </h4>
                    <div className={styles.buttonContainter}>
                        <button
                            onClick={handleOnClick}
                            disabled={currentStatus === "cancelled"}
                            className={styles.button}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
