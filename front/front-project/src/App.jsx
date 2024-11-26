/* eslint-disable no-undef */
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register'
import Contact from './views/Contact/Contact'
import AboutUs from './views/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'



function App() {
  const { user } = useAuth();  // Usamos el estado del usuario desde el contexto
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== "/" && location.pathname !== "/register") {
      navigate("/");
    }
    if (user && location.pathname) {
      navigate(location.pathname)
    }
    if (user && location.pathname === "/" || location.pathname === "/register") {
      navigate("/home");
    }
  }, [user, location.pathname, navigate]);


  return (
    <div>
      <main>

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
      </main>
    </div>
  )
}

export default App
