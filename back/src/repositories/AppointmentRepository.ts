import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import moment from "moment";

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    validateAllowAppointment: function(date: Date, time: string): void {

    const appointmentDateTime = moment(`${moment(date).format('YYYY-MM-DD')} ${time}`, "YYYY-MM-DD HH:mm");
    const now = moment(); 

    if (appointmentDateTime.isoWeekday() === 1) {
      throw new Error("El restaurante se encuentra cerrado los lunes.");
    }

    if (appointmentDateTime.diff(now, 'hours') < 24) {
      throw new Error("La reserva debe agendarse con al menos 24 horas de antelación.");
    }


    const hour = appointmentDateTime.hour(); 
    if (!( (hour >= 11 && hour < 14) || (hour >= 20 && hour < 24) )) {
      throw new Error("La reserva debe estar entre las 11am y 2pm, o entre las 8pm y 12am.");
    }
  },

  validateExistingAppointment: async function(userId: number, date: Date, time: string): Promise<void> {
    const appoinmentFound = await this.findOne({
      where: {
        user: {
          id: userId
        },
        date: date,
        time: time
      }
    });

    if (appoinmentFound) {
      throw new Error(`Ya tienes una reserva con fecha: ${date}, y hora: ${time}.`);
    }
  }
});

export default AppointmentRepository;