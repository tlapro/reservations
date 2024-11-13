import { Request, Response } from "express"

export const getUsers = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto devolvera un array de usuarios"})
}

export const getOneUser = async (req: Request, res: Response) => {
    res.status(201).json({message: "Esto devolvera un un solo usuario según su id"})

}

export const registerUser = async (req: Request, res: Response) => {
    res.status(201).json({message: "Este controlador llamará un servicio que registrará un usuario"})

}