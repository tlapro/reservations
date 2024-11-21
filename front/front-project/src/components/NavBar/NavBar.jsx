import styles from './NavBar.module.css';
const NavBar = () => {
    return (
    <div>
        <div className={styles.navbar}>
            <div>

            </div>
           
            <nav>
            <div className={styles.nvblinks}>
            <a href="#">Inicio</a>
            <a href="#">Mis Turnos</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Contacto</a>
            </div>
            </nav>

            <div>

            </div>
        </div>
    </div>
    )
}

export default NavBar;