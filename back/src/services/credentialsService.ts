import { AppDataSource } from "../config/data-source";
import { credentialDTO } from "../dtos/credentialDTO";
import { Credential } from "../entities/Credential";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";
import bcrypt from "bcrypt"

export const addCredentialService = async (credentialsData: credentialDTO): Promise<Credential> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect()
    try {
        await queryRunner.startTransaction();

        const user = await UserRepository.findOne({ where: { id: credentialsData.user } });

        if (!user) {
            throw new Error("User not found");
        }
        const cryptPassword = await crypPass(credentialsData.password);

        const newCredential = CredentialRepository.create({
            username: credentialsData.username,
            password: cryptPassword,
            user, 
        });

        await queryRunner.manager.save(newCredential);
        await queryRunner.commitTransaction();

        return newCredential;
    } catch (error) {
        await queryRunner.rollbackTransaction();

        console.error("Error al crear las credenciales:", error);
        throw new Error("Error al crear las credenciales");

    } finally {
        await queryRunner.release();
     }
}

const crypPass = async (password: string): Promise<string> => {

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}
export const validateCredentialService = async (username: string, password: string): Promise<number | null> => {
    const usernameFound: Credential | null = await CredentialRepository.findOneBy({ username });

    const crypPassword: string = await crypPass(password);

    if (!usernameFound) throw new Error(`El usuario ${username} no fue encontrado`)
    if (usernameFound.password !== crypPassword ) throw new Error(`Usuario o contraseña incorrectos`);

    else return usernameFound.id;
}

