import { Routes, Route, useLocation } from 'react-router-dom'
import styles from'./App.module.css'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Footer from './components/Footer/Footer'


function App() {
  const location = useLocation();
  return (
    <div className={styles.App}>
    
    {location.pathname === "/" || location.pathname === "/register" ? null : <NavBar />} 
    <Routes>
      <Route path='/' element={< Login />} />
      <Route path='/inicio' element={< Home />} />
      <Route path='/turnos' element={< MyAppointments  />} />
      <Route path='/home' element={< Home />} />
      <Route path='/register' element={< Register />} />
    </Routes>
    {location.pathname === "/" || location.pathname === "/register" ? <Footer /> : null}
    </div>
  )
}

export default App
