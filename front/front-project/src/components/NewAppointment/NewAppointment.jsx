/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./NewAppointment.module.css"; 
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import { UsersContext } from "../../context/UsersContext";
import Swal from 'sweetalert2';
import { validateAppointment } from "../../helpers/validateAppointment";

function showAlert(icon, title, text) {
  Swal.fire({
      icon: icon,
      title: title,
      text: text,
      width: '400px',
      color: '##F5F5DC', 
      background: '#F5F5DC', 
      iconColor: '#3C8C91', 
      confirmButtonColor: '#3C8C91', 
  });
}

const NewAppointment = ({ isOpen, onClose }) => {

  const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
  const formattedDate = tomorrow.toISOString().split("T")[0];
  const { fetchAppointments } = useContext(UsersContext);
  const { user } = useAuth();
  
  const [form, setForm] = useState({
    date: '',
    time: '',
    userId: user?.id || '',
  });

  useEffect(() => {
    if (user?.id) {
      setForm((prevForm) => ({
        ...prevForm,
        userId: user.id, 
      }));
    }
  }, [user]);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, 
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!form.date || !form.time || !form.userId) {
      console.log("Faltan datos para completar la reserva.");
      console.log(form)
      return;
    }

    const validation = validateAppointment(form);
    if (!validation.valid) {
      showAlert('error', 'Error', validation.message);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/appointments/schedule", form);
      console.log(form)
      showAlert('success', 'Reserva exitosa', 'Tu reserva ha sido gestionada con éxito.');

      onClose();
      
      fetchAppointments(user.id);
     
    } catch (error) {
      if (error.response) {
        const { message, data } = error.response.data;
        showAlert('error', message, data);
      } else {
        console.error("Error desconocido:", error);
        showAlert('error', 'Error desconocido', 'Ocurrió un error inesperado al realizar la reserva.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className={styles.modalOverlay}>
        <form className={styles.modal} onSubmit={handleOnSubmit}>
          <h2>Nueva Reserva</h2>
          <div className={styles.labels}>
            <label>
              Fecha:
              <input
                name="date"
                value={form.date}
                onChange={handleInputChange}
                className={styles.input}
                type="date"
                min={formattedDate}
              />
            </label>
            <label>
              Hora:
              <input
                name="time"
                value={form.time}
                onChange={handleInputChange}
                className={styles.input}
                type="time"
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>Reservar</button>
          <button type="button" onClick={onClose} className={styles.button}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default NewAppointment;
