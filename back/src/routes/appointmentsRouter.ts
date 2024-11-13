// GET /appointments => obtener todos los turnos
// GET /appointments:id => obtener turno por id

// POST /appointments/schedule => crear un nuevo turno

// PUT /appointments/cancel => cancelar un turno
import { Router } from "express";
import { cancelAppointment, getAppointment, getOneAppointment, newAppointment } from "../controllers/appointmentsController";

const appointmentRouter = Router();

appointmentRouter.get("/", getAppointment);

appointmentRouter.get("/:id", getOneAppointment);

appointmentRouter.post("/schedule", newAppointment);

appointmentRouter.put("/cancel", cancelAppointment);

export default appointmentRouter;

