import { Request, Response } from "express"
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/userAppointments";
import { appointmentDTO } from "../dtos/appointmentDto";
import { PostgresError } from "../interfaces/ErrorInterface";

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json({ appointments });
     } catch(err) {
        res.status(404).json({ message: "No se ha podido completar la solicitud", err });
    }
}

export const getOneAppointment = async (req: Request< { id: string} >, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json({appointment});
    } catch(err) {
        res.status(404).json({ message: "No se ha podido completar la solicitud", err });
    }
}

export const newAppointment = async (req: Request< unknown, unknown, appointmentDTO>, res: Response): Promise<void> =>  {
    const { date, time, user } = req.body;
    try {       
        if (!req.body.user) {
            res.status(400).json("No se pudo completar la solicitud");
            return;
        }
        const newAppointment = await createAppointmentService({
        date,
        time,
        user
        });

        res.status(201).json({ newAppointment });
        return;
    } catch (error) {
    const err = error as PostgresError
        res.status(400).json({ message: "Error en el servidor", 
            data: err instanceof Error ? err.detail ? err.detail : err.message : "error desconocido"});
        return;
    }
}

export const cancelAppointment = async (req: Request< { id: string } >, res: Response) => {
    try {
    const { id } = req.params;
    console.log(req.params)
    const appointment = await cancelAppointmentService(Number(id));
    console.log(req.params)
        res.status(200).json({message: "Turno cancelado", appointment: appointment});
    } catch(err) {
     res.status(404).json({ message: "No se ha podido completar la solicitud", err });
    }
}