/* eslint-disable no-unused-vars */
import moment from 'moment';

export const validateAppointment = (form) => {
  // Convertir la fecha seleccionada en un objeto Moment
  const selectedDate = moment(form.date, "YYYY-MM-DD"); // Formato esperado: "YYYY-MM-DD"
  
  // Fecha actual
  const currentDate = moment();

  // Compara las fechas solo en día, mes y año (sin la hora)
  const currentDateWithoutTime = currentDate.startOf('day'); // Limpiamos la hora (00:00:00)
  const selectedDateWithoutTime = selectedDate.startOf('day');

  // Verificar si la fecha seleccionada es mayor a una semana
  const oneWeekLater = currentDate.add(7, 'days').startOf('day');
  if (selectedDateWithoutTime.isAfter(oneWeekLater)) {
    return { valid: false, message: 'No puedes hacer una reserva para más de una semana en el futuro.' };
  }

  // Verificar si es lunes
  const dayOfWeek = selectedDate.weekday(); // 0 - domingo, 1 - lunes, ..., 6 - sábado
  console.log("Día de la semana:", dayOfWeek); // Verifica el día de la semana
  if (dayOfWeek === 1) {
    return { valid: false, message: 'No se pueden hacer reservas los lunes.' };
  }

  // Verificar si la hora está en el rango permitido
  const selectedTime = form.time.split(":")[0]; // Obtener solo la hora (sin los minutos)
  if ((selectedTime < 11 || selectedTime > 14) && (selectedTime < 20 || selectedTime >= 24)) {
    return { valid: false, message: 'Los horarios de atención son de 11:00 a 14:00 y de 20:00 a 00:00.' };
  }

  return { valid: true };
};
