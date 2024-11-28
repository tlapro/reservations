import styles from './NavBar.module.css';
import { Link , useNavigate } from 'react-router-dom';
import ancla from '../../assets/ancla.png';
import { useContext, useState } from 'react';
import { UsersContext } from '../../context/UsersContext';
const NavBar = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UsersContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setUser(null); 
    navigate("/")
  };
  
  return (
    <header>
      <div className={styles.navbar}>

        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={ancla} alt="ancla" className={styles.ancla} />
            <h1 className={styles.nvblogo}>
              Frente Al Mar
              <br />
              Restaurante
            </h1>
          </div>
        </div>

        <div className={styles.mobileButtons}>
        <button
  className={styles.menuBtn}
  onClick={() => {
    setMenuOpen((prev) => {
      console.log("Estado actual:", prev);
      return !prev;
    });
  }}
>
  ☰
</button>
          <button
            className={styles.logoutSmall}
            onClick={handleLogout}
          >
            Cerrar <br/>Sesión
          </button>
        </div>


        <nav>
          <div
            className={`${styles.nvblinks} ${
              menuOpen ? styles.show : ""
            }`}
          >
            <Link to="/inicio">Inicio</Link>
            <Link to="/agendar">Agendar Reserva</Link>
            <Link to="/turnos">Mis Reservas</Link>
            <Link to="/acercade">Sobre Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </nav>

        <div className={styles.logoutContainer}>
          <Link to="/configuration">
            <img
              className={styles.imgProfile}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/" onClick={handleLogout} className={styles.logoutText}>
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
