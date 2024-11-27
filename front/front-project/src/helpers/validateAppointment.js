/* eslint-disable no-unused-vars */
import moment from 'moment';

export const validateAppointment = (form) => {

  const selectedDate = moment(form.date, "YYYY-MM-DD"); 
  

  const currentDate = moment();

  const currentDateWithoutTime = currentDate.startOf('day');
  const selectedDateWithoutTime = selectedDate.startOf('day');


  const oneWeekLater = currentDate.add(7, 'days').startOf('day');
  if (selectedDateWithoutTime.isAfter(oneWeekLater)) {
    return { valid: false, message: 'No puedes hacer una reserva para más de una semana en el futuro.' };
  }


  const dayOfWeek = selectedDate.weekday();
  if (dayOfWeek === 1) {
    return { valid: false, message: 'No se pueden hacer reservas los lunes.' };
  }
  const selectedTime = form.time.split(":");
  const hour = parseInt(selectedTime[0], 10); 
  const minutes = parseInt(selectedTime[1], 10);

  if ((hour < 11 || hour > 14) && (hour < 20 || hour >= 24)) {
    return { valid: false, message: 'Los horarios de atención son de 11:00 a 14:00 y de 20:00 a 00:00.' };
  }
  

  return { valid: true };
};
