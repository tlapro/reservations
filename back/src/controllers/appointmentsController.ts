import { Request, Response } from "express"

export const getAppointment = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto devolvera un array de turnos"});
}

export const getOneAppointment = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto devolvera un solo turnos"});
}

export const newAppointment = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto registrará un nuevo turno"});
}

export const cancelAppointment = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto cancelará un turno"});
}