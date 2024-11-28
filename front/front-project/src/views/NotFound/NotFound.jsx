import styles from "./NotFound.module.css"
const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-center mt-5 mb-5">404 Not Found</h1>
        <p>| - Página no encontrada - |</p>
    </div>
  )
}

export default NotFound;