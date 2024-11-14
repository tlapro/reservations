import  { IAppointment, UserStatus } from "../interfaces/IAppointment";

const appointments: IAppointment[] = [{
    id: 1,
    date: "15/11/2024",
    time: "15:00",
    userId: 1,
    status: UserStatus.ACTIVE,
}
]

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
}
export const getAppointmentByIdService = async (id: number): Promise<IAppointment | null> => {
    const appoint = appointments.find((appoint) => appoint.id === id);
    return appoint || null;
}

export const createAppointmentService = async (date: string, time: string, userId: number): Promise<IAppointment> => {
    
  if (!userId) {
      throw new Error("El ID de usuario es obligatorio para crear un turno.");
    }
  
    const newId = appointments.length + 1;
  
    const newAppointment: IAppointment = {
      id: newId,
      date,
      time,
      userId,
      status: UserStatus.ACTIVE,
    };
  
    appointments.push(newAppointment);
  
    return newAppointment;
  };

  export const cancelAppointmentService = async (id: number): Promise<IAppointment | null> => {
    const appointment = appointments.find((appoint) => appoint.id === id);

    if (!appointment) {
        return null;
    }

    appointment.status = UserStatus.CANCELLED;

    return appointment;
  }