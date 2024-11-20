import { AppDataSource } from "../config/data-source";
import { appointmentDTO } from "../dtos/appointmentDto";
import  { UserStatus } from "../interfaces/IAppointment";
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";

export const getAppointmentsService = async (): Promise<appointmentDTO[]> => {
  const appointments = await AppointmentRepository.find({
    relations: {
        user: true,  // Asegúrate de que 'userId' está relacionado con el modelo de User
    }
  });
  console.log(appointments);
  
  if (!appointments || appointments.length === 0) {
    throw new Error("No existen turnos")
  }
  const appointmentsDTO: appointmentDTO[] = appointments.map(appointment => ({
    date: appointment.date, 
    time: appointment.time, 
    status: appointment.status, 
    user: appointment.user.id, 
  }));

return appointmentsDTO;
}
export const getAppointmentByIdService = async (id: number): Promise<appointmentDTO | null> => {
const appointment = await AppointmentRepository.findOne({
  where: { id },
  relations: ["user"], // Carga la relación del usuario
});
  if (!appointment) {
    throw new Error("No se encontró la cita");  
  }
  const appointmentDTO: appointmentDTO = {
    date: appointment.date,
    time: appointment.time,
    status: appointment.status,
    user: appointment.user.id,  // Extraemos solo el id del usuario
};

return appointmentDTO;
}
  
export const createAppointmentService = async (appointmentData: appointmentDTO): Promise<appointmentDTO | undefined> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  
  try {
    await queryRunner.startTransaction(); 
    await AppointmentRepository.validateExistingAppointment(appointmentData.user, appointmentData.date, appointmentData.time);  
    AppointmentRepository.validateAllowAppointment(appointmentData.date, appointmentData.time); 
      

    if (!appointmentData.user) {
      throw new Error("El ID de usuario es obligatorio para crear un turno.");
    }
    
    const user = await UserRepository.findOneBy({ id: appointmentData.user });
    
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

    const savedAppointment = await queryRunner.manager.save(newAppointment); // Asegúrate de usar await aquí

    await queryRunner.commitTransaction();

    return  {
    date: savedAppointment.date,
    time: savedAppointment.time,
    status: savedAppointment.status,
    user: savedAppointment.user.id, 
  };
} catch (error) {
  await queryRunner.rollbackTransaction();
  if (error) {
    throw new Error(`Error al crear la cita`);
  }
  } finally {
    await queryRunner.release();
  }
};


export const cancelAppointmentService = async (id: number): Promise<boolean | undefined> => {

    console.log("ID recibido en el servicio:", id);
    
    const appointment = await AppointmentRepository.findOneBy({id});
    console.log("Turno encontrado en la base de datos:", appointment);
    
    if (!appointment || appointment === null) {
      throw new Error("Turno no encontrado");
    }
    
    const result = await AppointmentRepository.update({ id }, { status: UserStatus.CANCELLED });
    console.log("Resultado del update:", result);
    
    if (result.affected === 0) {
      console.error("Error: No se pudo actualizar el estado del turno para ID:", id);
      throw new Error("No se pudo actualizar el estado del turno");
    }
    
    console.log("Estado del turno actualizado con éxito");
    return true;

    
};
    // if (!appointment) {
    //     return null;
    // }

    // appointment.status = UserStatus.CANCELLED;

    // return appointment;
  