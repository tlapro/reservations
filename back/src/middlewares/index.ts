import { NextFunction, Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import CredentialRepository from "../repositories/CredentialRepository";
export const validateUserRegisterData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const campos: string[] = ["birthdate", "email", "nDni", "name", "password", "username"];

    const camposFiltrados: string[] = campos.filter(campo => !req.body[campo]);
    
    if (camposFiltrados.length === 1) {
        res.status(400).json({
            message: `Falta información para registrar el usuario. Campo faltante: ${camposFiltrados.join("")}`
        });
        return;
    } else if (camposFiltrados.length > 1) {
        res.status(400).json({
            message: `Falta información para registrar el usuario. Campos faltantes: ${camposFiltrados.join(", ")}`
        });
        return;
    }

    try {
        const existingUserByUsername = await CredentialRepository.findOne({
            where: { username: req.body.username } 
        });
        if (existingUserByUsername) {
            res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
            return;
        }

        const existingUserByEmail = await UserRepository.findOne({
            where: { email: req.body.email } 
        });
        if (existingUserByEmail) {
            res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
            return;
        }

        const existingUserByDni = await UserRepository.findOne({
            where: { nDni: req.body.nDni } 
        });
        if (existingUserByDni) {
            res.status(400).json({ message: 'El número de DNI ya está registrado.' });
            return;
        }
        next();
    } catch (error) {
        console.error("Error al verificar los datos del usuario:", error);
        res.status(500).json({ message: 'Hubo un error al verificar los datos del usuario.' });
    }
};
export const validateAppointmentRegisterData = (req: Request, res: Response, next: NextFunction): void => {
    const campos: string[] = ["date", "time", "userId"]

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