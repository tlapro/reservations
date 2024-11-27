import { AppDataSource } from "../config/data-source";
import { appointmentDTO } from "../dtos/appointmentDto";
import { User } from "../entities/User";
import  { UserStatus } from "../interfaces/IAppointment";
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";
import EmailService from "../utils/emailService";
import moment from 'moment-timezone';

moment.locale('es');
const timeZone = 'America/Argentina/Buenos_Aires'

export const getAppointmentsService = async (): Promise<appointmentDTO[]> => {
  const appointments = await AppointmentRepository.find({
    relations: {
        user: true, 
    }
  });
  
  if (!appointments || appointments.length === 0) {
    throw new Error("No existen turnos")
  }
  const appointmentsDTO: appointmentDTO[] = appointments.map(appointment => ({
    date: appointment.date, 
    time: appointment.time, 
    status: appointment.status, 
    userId: appointment.user.id, 
  }));

return appointmentsDTO;
}
export const getAppointmentByIdService = async (id: number): Promise<appointmentDTO | null> => {
const appointment = await AppointmentRepository.findOne({
  where: { id },
  relations: ["user"], 
});
  if (!appointment) {
    throw new Error(`No se encontró la cita con id: ${ id }`);  
  }
  const appointmentDTO: appointmentDTO = {
    date: appointment.date,
    time: appointment.time,
    status: appointment.status,
    userId: appointment.user.id,  
};

return appointmentDTO;
}
  
export const createAppointmentService = async (appointmentData: appointmentDTO): Promise<appointmentDTO | undefined> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  
  try {
    await queryRunner.startTransaction(); 
    await AppointmentRepository.validateExistingAppointment(appointmentData.userId, appointmentData.date, appointmentData.time);  
    AppointmentRepository.validateAllowAppointment(appointmentData.date, appointmentData.time); 
      

    if (!appointmentData.userId) {
      throw new Error("El ID de usuario es obligatorio para crear un turno.");
    }
    
    const user = await UserRepository.findOneBy({ id: appointmentData.userId });
    
    if (!user) {
      throw new Error("El usuario con el ID especificado no existe.");
    }
    const newAppointment = AppointmentRepository.create({
      date: appointmentData.date,
      time: appointmentData.time,
      user: user, 
    });

    newAppointment.user = user; 

    newAppointment.status = UserStatus.ACTIVE;

    const savedAppointment = await queryRunner.manager.save(newAppointment);

    await queryRunner.commitTransaction();

    const emailService = new EmailService();

    const formattedDate = moment(savedAppointment.date)
    .tz(timeZone)
    .format('dddd, DD MMMM YYYY'); 

    emailService
    .sendMail(
      user.email,
      'Reserva Creada',
      'La reserva ha sido creada con éxito!',
      `<h1>Hola!</h1><p><strong>Te esperamos el ${formattedDate} a las ${savedAppointment.time}hs!</strong> \
      <br>Muchas gracias por elegirnos! \
      <br> <h3>Frente Al Mar | Restaurante</h3>.`
    )
      .then(() => console.log('Correo enviado correctamente'))
      .catch((error) => console.error(`Error al enviar correo: ${error.message}`));

    return  {
    date: savedAppointment.date,
    time: savedAppointment.time,
    status: savedAppointment.status,
    userId: savedAppointment.user.id, 
  };
} catch (error) {
  await queryRunner.rollbackTransaction();
  if (error) {
    throw new Error(`${error}`);
  }
  } finally {
    await queryRunner.release();
  }
};


export const cancelAppointmentService = async (id: number): Promise<void> => {

    
  const appointment = await AppointmentRepository.findOne({
    where: { id },
    relations: ['user'], 
  });

    if (!appointment || appointment === null) {
      throw new Error("Turno no encontrado");
    }
    const result = await AppointmentRepository.update({ id }, { status: UserStatus.CANCELLED });

    if (result.affected === 0) {
      throw new Error("No se pudo actualizar el estado del turno");
    }

    const user = appointment.user as User;

    if (!user) {
      throw new Error("No se encontró el usuario");
    }
    const emailService = new EmailService();

    const formattedDate = moment(appointment.date)
    .tz(timeZone)
    .format('dddd, DD MMMM YYYY'); 

    emailService
    .sendMail(
      user.email,
      'Reserva Cancelada',
      'La reserva ha sido cancelada con éxito!',
      `<h1>Hola!</h1><p><strong>Tu reserva del ${formattedDate} a las ${appointment.time}hs! ha sido cancelada.</strong> \
      <br>Esperamos tu pronta visita! \
      <br> <h3>Frente Al Mar | Restaurante</h3>.`
    )
      .then(() => console.log('Correo enviado correctamente'))
      .catch((error) => console.error(`Error al enviar correo: ${error.message}`));
 

  

  }