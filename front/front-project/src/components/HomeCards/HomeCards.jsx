import styles from "./HomeCards.module.css"

const HomeCards = () => {
    return (
        <div>       
            <div className={styles.cardContainerLeft}>
                <img src="https://resizer.glanacion.com/resizer/v2/los-pescados-y-mariscos-son-una-opcion-saludable-5BTPLS35SJDPFBCQ2XQFFSPG3A.jpg?auth=d3b41f75f28c2b33609cf93cdf44edf48354db907f07c1b95311d7c353dcda7c&width=1920&height=1280&quality=70&smart=true"
                 className={styles.imgCard}></img>         
                <div>
                <h1 className={styles.titleCard}>Plato I</h1>
                <p className={styles.textCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi enim cumque autem rerum aliquam odio voluptates dicta perspiciatis blanditiis illo non ex repellendus vitae, reiciendis itaque neque odit quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos adipisci, officiis perspiciatis omnis quis, minus error recusandae ad, dolorem molestiae sapiente totam deleniti voluptates! Provident a ducimus vitae necessitatibus!</p>
                </div>
                
            </div>
            <div className={styles.cardContainerRight}>
                <div>
                <h1 className={styles.titleCard}>Plato II</h1>
                <p className={styles.textCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam ratione corporis adipisci hic est, nemo cupiditate saepe quae eius. In, provident? Quisquam praesentium voluptatibus voluptates, officia beatae at ducimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi enim cumque autem rerum aliquam odio voluptates dicta perspiciatis blanditiis illo non ex repellendus vitae, reiciendis itaque neque odit quia.</p>
                </div>
                <img src="https://canalcocina.es/medias/images/1604LaCocinaFacilDeAnnaOlsonEnsaladaFriaMariscoALaParrilla.jpg"
                 className={styles.imgCard}></img>
            </div>
           
            <div className={styles.cardContainerLeft}>
                <img src="https://www.recetasnestle.com.ar/sites/default/files/2024-01/mariscos-ajillo-pincho.jpg"
                className={styles.imgCard}></img>
                <div>
                <h1 className={styles.titleCard}>Plato III</h1>
                <p className={styles.textCard}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde recusandae voluptatum quos. Deleniti quia rem maxime sed eveniet dignissimos quod, labore molestiae cupiditate? Ullam ea dolores quia necessitatibus incidunt natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum id praesentium similique maxime dolores animi numquam odio ratione consectetur, rem ea minus impedit a, sapiente quia aut, qui eos fuga.</p>
                </div>
            </div>

        </div>
    )
}

export default HomeCards;