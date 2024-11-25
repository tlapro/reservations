import { Routes, Route, useLocation } from 'react-router-dom'
import styles from'./App.module.css'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Contact from './views/Contact/Contact'
import AboutUs from './views/AboutUs/AboutUs'
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
      <Route path='/aboutus' element={< AboutUs />} />
      <Route path='/contact' element={< Contact />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
