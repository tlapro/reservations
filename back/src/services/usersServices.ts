import IUser from "../interfaces/IUser";
import { addCredentialService } from "./credentialsService";

const users: IUser[] = [
    {
        id: 1,
        name: "Tomas",
        email: "tlapro9@mail.com",
        birthdate: "20/04/2000",
        nDni: 11111111,
        credentialsId: 1,
    }
]

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser | null> => {
    const user = users.find((user) => user.id === id);
    return user || null;
}

export const registerUserService = async (name: string, email: string, birthdate: string, nDni: number, username: string, password: string): Promise<number> => {
    const credentialsId = await addCredentialService(username, password);
    
    const newUser: IUser = {
        id: users.length + 1,
        name,
        email,
        birthdate,
        nDni,
        credentialsId,
    }

    users.push(newUser)
    return newUser.id;
}