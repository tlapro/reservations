import { UserModel } from "../config/data-source";
import {  IUserRegisterDTO } from "../dtos/userDto";
import { User } from "../entities/User";

import { addCredentialService } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find({
        relations: {
        appointments: true,
        }
    })
    return users;
}

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOneBy({
        id
    })
    return user;
}

export const registerUserService = async (userData: IUserRegisterDTO): Promise<User> => {
    const newUser = await UserModel.create(userData);
    const savedUser = await UserModel.save(newUser);

    const username = userData.name;
    const password = userData.password;
    
    const credentialData = {
        username,
        password,
        user: savedUser.id,
    }
    const newCredential = await addCredentialService(credentialData);

    savedUser.credential = newCredential; // Asegúrate de que el modelo de User tenga esta propiedad
    await UserModel.save(savedUser);


    return newUser;
}