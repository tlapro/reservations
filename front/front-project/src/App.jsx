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
import { useContext, useEffect } from 'react'
import { UsersContext } from './context/UsersContext'
import AgendarReserva from './views/AgendarReserva/AgendarReserva'




function App() {
  const { user } = useContext(UsersContext);  

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== "/" && location.pathname !== "/register") {

      navigate("/");
    } else if (user && location.pathname === "/") {

      navigate("/home");
    } else if (user && (location.pathname === "/register" || location.pathname === "/login")) {

      navigate("/home");
    } else if (user && location.pathname) {
      navigate(location.pathname);
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
      <Route path='/agendar' element={< AgendarReserva />} />
    </Routes>
    <Footer />
      </main>
    </div>
  )
}

export default App
