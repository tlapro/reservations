// GET /appointments => obtener todos los turnos
// GET /appointments:id => obtener turno por id

// POST /appointments/schedule => crear un nuevo turno

// PUT /appointments/cancel => cancelar un turno
import { NextFunction, Request, Response, Router } from "express";
import { cancelAppointment, getAppointment, getOneAppointment, newAppointment } from "../controllers/appointmentsController";   
import { validateAppointmentRegisterData } from "../middlewares";
import { appointmentDTO } from "../dtos/appointmentDto";

const appointmentRouter = Router();

appointmentRouter.get("/", (req: Request, res: Response) => getAppointment(req, res));

appointmentRouter.get("/:id", (req: Request< { id: string} >, res: Response) => getOneAppointment(req, res));

appointmentRouter.post("/schedule", (req: Request, res: Response, next: NextFunction) => validateAppointmentRegisterData(req, res, next),
(req: Request<unknown, unknown, appointmentDTO >, res: Response) => newAppointment(req, res));

appointmentRouter.put("/cancel/:id", (req: Request< { id: string } >, res: Response) => cancelAppointment(req, res));



export default appointmentRouter;

