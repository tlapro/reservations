// GET /appointments => obtener todos los turnos
// GET /appointments:id => obtener turno por id

// POST /appointments/schedule => crear un nuevo turno

// PUT /appointments/cancel => cancelar un turno
import { Request, Response, Router } from "express";
import { cancelAppointment, getAppointment, getOneAppointment, newAppointment } from "../controllers/appointmentsController";
import { IAppointment } from "../interfaces/IAppointment";

const appointmentRouter = Router();

appointmentRouter.get("/", (req: Request, res: Response) => getAppointment(req, res));

appointmentRouter.get("/:id", (req: Request< { id: string} >, res: Response) => getOneAppointment(req, res));

appointmentRouter.post("/schedule", (req: Request< unknown, unknown, IAppointment>, res: Response) => newAppointment(req, res));

appointmentRouter.put("/cancel", (req: Request< unknown, unknown, { id: string } >, res: Response) => cancelAppointment(req, res));

export default appointmentRouter;

