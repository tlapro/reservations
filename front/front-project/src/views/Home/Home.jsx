import styles from "./Home.module.css"
import HomeCards from "../../components/HomeCards/HomeCards";
import NewAppointment from "../../components/NewAppointment/NewAppointment";
import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";

const Home = () => {
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {addAppointment} = useContext(UsersContext)

    return (
        <>
        <div>
        <div className={styles.divLine}>
        <hr />
        </div>
            <div className={styles.titleHeading}>

                <h1>¡Bienvenidos a Frente al Mar!</h1>
            </div>
        <div className={styles.divLine}>
        <hr />
        </div>
            <div className={styles.cardContainer}>

            <div className={styles.cardContainer}>
                <div className={styles.videoWrapper}>
                <video 
                className={styles.videoCard}
                autoPlay
                muted
                loop
                playsInline
                >
                <source
                    src="https://cdn.pixabay.com/video/2023/02/09/149935-797511795_large.mp4"
                    type="video/mp4"
                />
                </video>
                <p className={styles.textCard}>
                Nuestras Especialidades
                </p>
                <button onClick={toggleModal} className={styles.button}>
                Nueva Reserva
                </button>
                <NewAppointment isOpen={isModalOpen} 
                onClose={toggleModal}
                addAppointment={addAppointment}
                />
                
                </div>
            </div>
            </div>
            <div className={styles.divLine}>
            <hr />
            </div>
          
            <div className={styles.titleHeading}>
                <h1>Algunos de nuestros platos</h1>
            </div>
            <div className={styles.divLine}>
            <hr />
            </div>

            <div className={styles.cardsContainer}>
                <HomeCards></HomeCards>
            </div>
            
          </div>
        </>
    )
}

export default Home;