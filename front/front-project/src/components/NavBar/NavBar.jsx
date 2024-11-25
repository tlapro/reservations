import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import ancla from '../../assets/ancla.png';
import { useAuth } from '../../context/AuthContext';
const NavBar = () => {

  const { setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Eliminamos el usuario de localStorage
    setUser(null); // Limpiamos el estado de usuario
  };
  
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.logoContainer}>  
            <div className={styles.logo}>
                <img src={ancla} alt="ancla" className={styles.ancla}  />
                <h1 className={styles.nvblogo}>Frente Al Mar
                <br />
                Restaurante
                </h1>
            </div>
        </div>
        <nav>
          

            
            <div className={styles.nvblinks}>
            <Link to='/inicio'>Inicio</Link>
            <Link to='/turnos'>Mis Reservas</Link>
            <Link to='/aboutus'>Sobre Nosotros</Link>
            <Link to='/contact'>Contacto</Link>
            
            </div>


        </nav>

        <div className={styles.logoutContainer}>
        <Link to='/' onClick={handleLogout} className={styles.logoutText}>Cerrar Sesion</Link>
        
        </div>
      </div>
    
    </>
  );
}

export default NavBar;
