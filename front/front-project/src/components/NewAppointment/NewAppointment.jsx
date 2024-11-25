/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./NewAppointment.module.css"; 
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import { UsersContext } from "../../context/UsersContext";
import Swal from 'sweetalert2';

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
  
  // Inicializamos el formulario con la estructura adecuada
  const [form, setForm] = useState({
    date: '',
    time: '',
    userId: user?.id || '', // Si el usuario está disponible, usamos su ID
  });

  useEffect(() => {
    if (user?.id) {
      setForm((prevForm) => ({
        ...prevForm,
        userId: user.id, // Asignamos el userId desde el contexto
      }));
    }
  }, [user]);
  
  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, // Actualizamos el valor del campo que cambió
    }));
  };

  // Función para enviar el formulario
  const handleOnSubmit = async (event) => {
    event.preventDefault(); // Prevenimos la recarga de la página

    // Asegurarnos de que el formulario contiene la información necesaria
    if (!form.date || !form.time || !form.userId) {
      console.log("Faltan datos para completar la reserva.");
      console.log(form)
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
        // Usamos showAlert para mostrar el mensaje del backend
        const { message, data } = error.response.data;
        showAlert('error', message, data);
      } else {
        // Manejamos errores desconocidos
        console.error("Error desconocido:", error);
        showAlert('error', 'Error desconocido', 'Ocurrió un error inesperado al realizar la reserva.');
      }
    }
  };

  // Si el modal no está abierto, no renderizamos nada
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
