import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`py-4 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          {/* Información */}
          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={styles.title}>Frente al Mar</h5>
            <p className={styles.text}>
              El mejor restaurante junto al mar, ofreciendo sabores únicos y vistas inolvidables.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={styles.title}>Enlaces Rápidos</h5>
            <ul className="list-unstyled text-center">
              <li><a href="#" className={styles.link}>Inicio</a></li>
              <li><a href="#" className={styles.link}>Menú</a></li>
              <li><a href="#" className={styles.link}>Reservas</a></li>
              <li><a href="#" className={styles.link}>Contacto</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={styles.title}>Redes Sociales</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="#" className={styles.link}>
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea de Copyright */}
        <div className={`text-center mt-3 ${styles.copyright}`}>
          <p className={styles.text}>© 2024 Frente al Mar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
