
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
import NotFound from './views/NotFound/NotFound'




function App() {
  const { user } = useContext(UsersContext);  

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const existingPaths = ['/', '/inicio', '/register', '/login', '/aboutus', '/contacto', '/agendar'];
    if (!user && location.pathname !== "/" && location.pathname !== "/register") {

      navigate("/");
    } else if (user && location.pathname === "/") {

      navigate("/inicio");
    } else if (user && (location.pathname === "/register" || location.pathname === "/login")) {

      navigate("/inicio");
    } else if (user && location.pathname) {
      navigate(location.pathname);
    } else if (!existingPaths.includes(location.pathname)) {
      navigate("/notfound"); 
    }
  }, [user, location.pathname, navigate]);


  return (
    <div>
      {location.pathname === "/" || location.pathname === "/register" ? null : <NavBar />} 
      <main>
    <Routes>
      <Route path='/' element={< Login />} />
      <Route path='/inicio' element={< Home />} />
      <Route path='/turnos' element={< MyAppointments  />} />
      <Route path='/register' element={< Register />} />
      <Route path='/acercade' element={< AboutUs />} />
      <Route path='/contacto' element={< Contact />} />
      <Route path='/agendar' element={< AgendarReserva />} />
      <Route path='/notfound' element={< NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
      </main>
    </div>
  )
}

export default App
