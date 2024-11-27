import { useContext, useState } from "react";
import NewAppointment from "../../components/NewAppointment/NewAppointment";
import { UsersContext } from "../../context/UsersContext";
import styles from "./AgendarReserva.module.css"

const AgendarReserva = () => {

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {addAppointment} = useContext(UsersContext)

    return (
        <div>
            <div className={styles.container}>
            <hr className={styles.linea}/>
            <h1>Agendar reserva</h1>
            <hr className={styles.linea}/>
            <div className={styles.containerText}>


                <p className="text-center">Desde aquí podras hacer tus reservas</p>
                <h2 className={styles.title}>Local abierto de Martes a Domingos</h2>
                <p className="text-center">
                    <strong>Horarios de Atención:</strong> 
                    <br /> 11:00am a 15:00pm y 20:00pm a 1:00am.
                    <br />
                    <strong>Horarios de Reservas: </strong> 
                    <br />11:00am a 14:00pm y 20:00pm a 00:00am.
                    
                </p>

            </div>
                <button onClick={toggleModal} className={styles.button}>
                Nueva Reserva
                </button>
                <NewAppointment isOpen={isModalOpen} 
                onClose={toggleModal}
                addAppointment={addAppointment}/>
            </div>
        </div>
    )
}

export default AgendarReserva;