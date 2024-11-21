import styles from'./App.module.css'
import Home from './views/Home/Home'
import MyAppointments from './views/MyAppointments/MyAppointments'


function App() {


  return (
    <div className={styles.App}>
    <Home />
    <MyAppointments />
    </div>
  )
}

export default App
