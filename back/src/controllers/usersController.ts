import { Request, Response } from "express"
import { getUserByIdService, getUsersService, loginUserService, registerUserService } from "../services/usersServices"
import { IUserLoginDTO, IUserRegisterDTO, UserLoginSuccessDto } from "../dtos/userDto";
import { PostgresError } from "../interfaces/ErrorInterface";


export const getUsers = async (req: Request, res: Response): Promise<void> =>  {
    try {
        const users = await getUsersService();
        res.status(200).json({users})
    } catch(error) {
        const err = error as PostgresError
        res.status(404).json({ message: "Error en el servidor", 
            data: err instanceof Error ? err.detail ? err.detail : err.message : "error desconocido"});
        return;
    }
} 

export const getOneUser = async (req: Request< { id: string } >, res: Response): Promise<void> => {
    try {
        const { id } =  req.params;
        const user = await getUserByIdService(parseInt(id));
        res.status(200).json({user})
    } catch(error) {
        const err = error as PostgresError
        res.status(404).json({ message: "Error en el servidor", 
            data: err instanceof Error ? err.detail ? err.detail : err.message : "error desconocido"});
        return;
    }
}

export const registerUser = async (req: Request< unknown, unknown, IUserRegisterDTO>, res: Response) => {
    try {
        const newUser = await registerUserService(req.body);
        res.status(201).json({message: "Usuario registrado correctamente.",
            user: newUser.name
        })
    } catch (error) {
        const err = error as PostgresError
            res.status(400).json({ message: "Error en el servidor", 
                data: err instanceof Error ? err.detail ? err.detail : err.message : "error desconocido"});
            return;
        }
}

export const loginUser = async (req: Request < unknown, unknown, IUserLoginDTO >, res: Response) => {
    try {
        const response: UserLoginSuccessDto = await loginUserService(req.body)
        res.status(200).json(response);  
    } catch(error) {
        res.status(400).json({ message: "No se ha podido completar la solicitud", error });
    }
}