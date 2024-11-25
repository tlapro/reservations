import styles from "./Home.module.css"
import HomeCards from "../../components/HomeCards/HomeCards";

const Home = () => {
    return (
        <>
        <div>
            <header>

            <div className={styles.titleHeading}>
                <h1>¡Bienvenidos a Frente al Mar!</h1>
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
                </div>
            </div>
            </div>
            </header>

            <div className={styles.cardsContainer}>
                <HomeCards></HomeCards>
            </div>
            
          </div>
        </>
    )
}

export default Home;