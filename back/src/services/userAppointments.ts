import { AppointmentModel, UserModel } from "../config/data-source";
import { appointmentDTO } from "../dtos/appointmentDto";
import  { UserStatus } from "../interfaces/IAppointment";

export const getAppointmentsService = async (): Promise<appointmentDTO[]> => {
  const appointments = await AppointmentModel.find({
    relations: {
        userId: true,  // Asegúrate de que 'userId' está relacionado con el modelo de User
    }
  });
  const appointmentsDTO: appointmentDTO[] = appointments.map(appointment => ({
    date: appointment.date,  // Asegúrate de que la fecha sea del tipo correcto
    time: appointment.time,  // Lo mismo para la hora
    status: appointment.status,  // Lo mismo para el estado
    userId: appointment.userId.id,  // Extraer solo el id del usuario
  }));

return appointmentsDTO;
}
export const getAppointmentByIdService = async (id: number): Promise<appointmentDTO | null> => {
    const appointment = await AppointmentModel.findOneBy({
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
  

export const createAppointmentService = async (appointmentData: appointmentDTO): Promise<appointmentDTO> => {
  try {
    if (!appointmentData.userId) {
        throw new Error("El ID de usuario es obligatorio para crear un turno.");
    }

    const user = await UserModel.findOne({
        where: { id: appointmentData.userId },
    });

    if (!user) {
        throw new Error("El usuario con el ID especificado no existe.");
    }

    // Asignar el status como UserStatus.ACTIVE si es necesario
    const newAppointment = AppointmentModel.create({
        date: appointmentData.date,
        time: appointmentData.time,
        status: UserStatus.ACTIVE,  // Si UserStatus.ACTIVE es una constante, asegúrate de que sea un string como "ACTIVE"
        userId: user, // Asegúrate de pasar el objeto `user`
    });

    const savedAppointment = await AppointmentModel.save(newAppointment);

    return {
        date: savedAppointment.date,
        time: savedAppointment.time,
        status: savedAppointment.status,
        userId: savedAppointment.userId.id, // Aquí extraemos el id del usuario
    };
} catch (error) {
    throw new Error(`Error al crear la cita ${error}`);
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