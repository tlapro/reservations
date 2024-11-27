import styles from "./Footer.module.css";
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/register";

  return (
    
    <footer
      className={`py-4 ${isLoginPage || isRegisterPage ? styles.transparentFooter : styles.defaultFooter}`}
    >
      <div className="container">
        <div className="row">
          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={`${isLoginPage || isRegisterPage ? styles.title : styles.titleDefault}`}>Frente al Mar</h5>
            <p className={`${isLoginPage || isRegisterPage ? styles.text : styles.textDefault}`}>
              El mejor restaurante junto al mar, ofreciendo sabores únicos y vistas inolvidables.
            </p>
          </div>

          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={`${isLoginPage || isRegisterPage ? styles.title : styles.titleDefault}`}>Enlaces Rápidos</h5>
            <ul className="list-unstyled text-center">
              <li><a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>Inicio</a></li>
              <li><a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>Menú</a></li>
              <li><a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>Reservas</a></li>
              <li><a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>Contacto</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className={`col-md-4 d-flex flex-column align-items-center ${styles.section}`}>
            <h5 className={`${isLoginPage || isRegisterPage ? styles.title : styles.titleDefault}`}>Redes Sociales</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className={`${isLoginPage || isRegisterPage ? styles.link : styles.linkDefault}`}>
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea de Copyright */}
        <div className={`text-center mt-3 ${styles.copyright}`}>
          <p className={`${isLoginPage || isRegisterPage ? styles.copyright : styles.copyrightDefault}`}>
            © 2024 Frente al Mar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
