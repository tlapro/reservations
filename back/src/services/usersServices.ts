import UserRepository from "../repositories/UserRepository";
import {  IUserRegisterDTO } from "../dtos/userDto";
import { User } from "../entities/User";

import { addCredentialService } from "./credentialsService";
import { AppDataSource } from "../config/data-source";


export const getUsersService = async (): Promise<User[] | undefined> => {
    try {
        const users = await UserRepository.find({
            relations: {
                appointments: true,
            }
        })
        return users;
    } catch (error) {
        console.error("Error en el registro:", error);
    }
}
export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserRepository.findOneBy({
        id
    })
    return user;
}

export const registerUserService = async (userData: IUserRegisterDTO): Promise<User> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
        await queryRunner.startTransaction()
        const newUser: User = UserRepository.create(userData);
        const savedUser = await queryRunner.manager.save(newUser);
        
        await queryRunner.commitTransaction();

        const username = userData.username;
        const password = userData.password;
        
        const credentialData = {
            username,
            password,
            user: savedUser.id,
        }
        const newCredential = await addCredentialService(credentialData);
        
        savedUser.credentials = newCredential; 
        await queryRunner.manager.save(savedUser);

        
        return newUser;
     } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error("Error en el registro:", error);
    throw new Error("Error al registrar el usuario");

    } finally {
    await queryRunner.release();
    }
}