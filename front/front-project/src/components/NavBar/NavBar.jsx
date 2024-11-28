import styles from './NavBar.module.css';
import { Link , useNavigate } from 'react-router-dom';
import ancla from '../../assets/ancla.png';
import { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
const NavBar = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UsersContext);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setUser(null); 
    navigate("/")
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
            <Link to='/agendar'>Agendar Reserva</Link>
            <Link to='/turnos'>Mis Reservas</Link>
            <Link to='/acercade'>Sobre Nosotros</Link>
            <Link to='/contacto'>Contacto</Link>
            
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
