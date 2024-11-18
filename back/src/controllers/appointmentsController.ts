import { Request, Response } from "express"
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/userAppointments";
import { appointmentDTO } from "../dtos/appointmentDto";

export const getAppointment = async (req: Request, res: Response) => {
    try {

        const appointments = await getAppointmentsService();
        res.status(201).json({appointments});
     } catch(err) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", err });
    }
}

export const getOneAppointment = async (req: Request< { id: string} >, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));
        res.status(201).json({appointment});
    } catch(err) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", err });
    }
}

export const newAppointment = async (req: Request< unknown, unknown, appointmentDTO>, res: Response): Promise<void> =>  {
    const { date, time, userId } = req.body;
    try {
        if (!req.body.userId) {
            res.status(400).json("No se pudo completar la solicitud");
            return;
        }
        const newAppointment = await createAppointmentService({
        date,
        time,
        userId
        });

        res.status(201).json({ newAppointment });
        return;
    } catch (err) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", err });
        return;
    }
}

export const cancelAppointment = async (req: Request< unknown, unknown, { id: string } >, res: Response) => {
    try {
    const { id } = req.body;
    const appointment = await cancelAppointmentService(Number(id));
    res.status(201).json({message: "Turno cancelado", appointment: appointment});
    } catch(err) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", err });
    }
}