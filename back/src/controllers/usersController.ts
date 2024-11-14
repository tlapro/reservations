import { Request, Response } from "express"
import { getUserByIdService, getUsersService, registerUserService } from "../services/usersServices"
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/userDto";


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService();
        res.status(201).json({users})
    } catch(error) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", error });
    }
} 

export const getOneUser = async (req: Request< { id: string } >, res: Response) => {
    try {
        const { id } =  req.params;
        const user = await getUserByIdService(parseInt(id));
        res.status(201).json({user})
    } catch(error) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", error });
    }
}

export const registerUser = async (req: Request< unknown, unknown, IUserRegisterDTO>, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password} = req.body;
        const newUser = await registerUserService(name, email, birthdate, nDni, username, password);

        res.status(201).json({message: "Usuario registrado correctamente.",
            user: newUser
        })
    } catch {
        res.status(400).json({message: "Hubo un error en el registro"})
    }
}

export const loginUser = async (req: Request < unknown, unknown, IUserLoginDTO >, res: Response) => {
    const { username, password } = req.body;
    res.status(201).json({message: "Con esto funcionará el login", username, password});  
}