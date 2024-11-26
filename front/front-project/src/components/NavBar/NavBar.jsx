import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import ancla from '../../assets/ancla.png';
import { useAuth } from '../../context/AuthContext';
const NavBar = () => {

  const { setUser } = useAuth();
  const { user } = useAuth();
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
        <Link to='/configuration' ><img className={styles.imgProfile} 
                src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt="Foto de perfil"
                width={50}
                height={50}></img>
        </Link>


        
        <Link to='/' onClick={handleLogout} className={styles.logoutText}>Cerrar Sesion</Link>
        
        </div>
      </div>
    
    </>
  );
}

export default NavBar;
