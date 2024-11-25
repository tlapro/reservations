import styles from "./HomeCards.module.css"

const HomeCards = () => {
    return (
        <div>
            <div className={styles.cardContainerLeft}>
                <img src="https://resizer.glanacion.com/resizer/v2/los-pescados-y-mariscos-son-una-opcion-saludable-5BTPLS35SJDPFBCQ2XQFFSPG3A.jpg?auth=d3b41f75f28c2b33609cf93cdf44edf48354db907f07c1b95311d7c353dcda7c&width=1920&height=1280&quality=70&smart=true"
                 className={styles.imgCard}></img>
                <p className={styles.textCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi enim cumque autem rerum aliquam odio voluptates dicta perspiciatis blanditiis illo non ex repellendus vitae, reiciendis itaque neque odit quia.</p>
            </div>
            <div className={styles.cardContainerRight}>
                <p className={styles.textCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi enim cumque autem rerum aliquam odio voluptates dicta perspiciatis blanditiis illo non ex repellendus vitae, reiciendis itaque neque odit quia.</p>
                <img src="https://canalcocina.es/medias/images/1604LaCocinaFacilDeAnnaOlsonEnsaladaFriaMariscoALaParrilla.jpg"
                 className={styles.imgCard}></img>
            </div>
            <div className={styles.cardContainerLeft}>
                <img src="https://www.recetasnestle.com.ar/sites/default/files/2024-01/mariscos-ajillo-pincho.jpg"
                 className={styles.imgCard}></img>
                <p className={styles.textCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi enim cumque autem rerum aliquam odio voluptates dicta perspiciatis blanditiis illo non ex repellendus vitae, reiciendis itaque neque odit quia.</p>
            </div>

        </div>
    )
}

export default HomeCards;