import { AppDataSource } from "../config/data-source";
import { appointmentDTO } from "../dtos/appointmentDto";
import  { UserStatus } from "../interfaces/IAppointment";
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";

export const getAppointmentsService = async (): Promise<appointmentDTO[]> => {
  const appointments = await AppointmentRepository.find({
    relations: {
        userId: true,  // Asegúrate de que 'userId' está relacionado con el modelo de User
    }
  });
  const appointmentsDTO: appointmentDTO[] = appointments.map(appointment => ({
    date: appointment.date, 
    time: appointment.time, 
    status: appointment.status, 
    userId: appointment.userId.id, 
  }));

return appointmentsDTO;
}
export const getAppointmentByIdService = async (id: number): Promise<appointmentDTO | null> => {
    const appointment = await AppointmentRepository.findOneBy({
       id 
      });
  if (!appointment) {
    return null;  // Si no se encuentra la cita, devolver null
  }
  const appointmentDTO: appointmentDTO = {
    date: appointment.date,
    time: appointment.time,
    status: appointment.status,
    userId: appointment.userId.id,  // Extraemos solo el id del usuario
};

return appointmentDTO;
}
  
 // Asignar el status como UserStatus.ACTIVE si es necesario


export const createAppointmentService = async (appointmentData: appointmentDTO): Promise<appointmentDTO | undefined> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    await queryRunner.startTransaction(); 

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
      status: UserStatus.ACTIVE,  
      userId: user, 
    });

    newAppointment.userId = user; 

    newAppointment.status = UserStatus.ACTIVE;

    const savedAppointment = await queryRunner.manager.save(newAppointment); // Asegúrate de usar await aquí

    await queryRunner.commitTransaction();

    return  {
    date: savedAppointment.date,
    time: savedAppointment.time,
    status: savedAppointment.status,
    userId: savedAppointment.userId.id, 
  };
  } catch {
    await queryRunner.rollbackTransaction();
    throw new Error("Error al crear la cita"); 
  } finally {
    await queryRunner.release();
  }
};


  export const cancelAppointmentService = async (id: number) => {
    // const appointment = appointments.find((appoint) => appoint.id === id);
    return id;
    // if (!appointment) {
    //     return null;
    // }

    // appointment.status = UserStatus.CANCELLED;

    // return appointment;
  }