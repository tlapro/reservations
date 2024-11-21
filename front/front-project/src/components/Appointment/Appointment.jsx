/* eslint-disable react/prop-types */
import styles from './Appointment.module.css';
const Appointment = ({date, time, status}) => {
    console.log(status);
    return (
    <div>
    <div className={styles.container}>
        <div className={styles.card}>
            <h3>Hora: {time}</h3>
            <h3>Fecha: {date}</h3>
            <h3 className={styles[status]}>{status === "active" ? "ACTIVA" : "CANCELADA"}</h3>
            <div className={styles.buttonContainter}>

            <button disabled={status == "cancelled"} className={styles.button}>
                Cancelar
            </button>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Appointment;