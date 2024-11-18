import { NextFunction, Request, Response } from "express";

export const validateUserRegisterData = (req: Request, res: Response, next: NextFunction): void => {
    const campos: string[] = ["birthdate", "email", "nDni", "name", "password", "username"]

    const camposFiltrados: string[] = campos.filter(campo => !req.body[campo]);
    
    if (camposFiltrados.length === 1) {
        res.status(400).json({
            message: `Falta información para registrar el usuario. Campo faltante: ${camposFiltrados.join("")}`
        })
    } else if (camposFiltrados.length > 1) {
        res.status(400).json({
            message: `Falta información para registrar el usuario. Campos faltantes: Fields missing: ${camposFiltrados.join(", ")}`
        })
    } else next()
}

export const validateAppointmentRegisterData = (req: Request, res: Response, next: NextFunction): void => {
    const campos: string[] = ["date", "time", "user"]

    const camposFiltrados: string[] = campos.filter(campo => !req.body[campo]);
    
    if (camposFiltrados.length === 1) {
        res.status(400).json({
            message: `Falta información para crear la cita. Campo faltante: ${camposFiltrados.join("")}`
        })
    } else if (camposFiltrados.length > 1) {
        res.status(400).json({
            message: `Falta información para crear la cita. Campos faltantes: ${camposFiltrados.join(", ")}`
        })
    } else next()
}