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

const Appointment = ({ id, date, time, status, index}) => {
    const { cancelAppointment } = useContext(UsersContext);
    const [currentStatus, setCurrentStatus] = useState(status);
        
    const isCancelable = () => {    

    const [year, month, dayHour] = date.split("-");
    const day = dayHour.split("T")[0].split("-")[0];
    
    const [appHour, appMinute] = time.split(":");

    const appointmentDate = new Date(
        parseInt(year),
        parseInt(month) - 1, 
        parseInt(day),
        parseInt(appHour),
        parseInt(appMinute)
    );


    const nowLocal = new Date();
    const diffMinutes = Math.abs((appointmentDate - nowLocal) / (1000 * 60));

    if (diffMinutes <= 1440) {
        return false;
    } else {
        return true
    } 
}

    const handleOnClick = async () => {

        if (!isCancelable()) {
            showAlert('warning', 'No se puede cancelar', 'No se puede cancelar la reserva dentro de las 24 horas anteriores al turno.');
            return; 
        }
        try {   
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

                
                <div className={`${styles.card} ${currentStatus === "cancelled" ? styles.disabledCard : ''}`}>
                    <div>
                        <h4 className={styles.title}>Reserva: {index}</h4>
                        <hr className={styles.line}/>
                    </div>
                    
                    <div className={styles.cardInfo}>
                        
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
        </div>
    );
};

export default Appointment;
