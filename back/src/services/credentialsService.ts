
import { credentialDTO } from "../dtos/credentialDTO";
import { Credential } from "../entities/Credential";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";
import bcrypt from "bcrypt"

export const addCredentialService = async (credentialsData: credentialDTO): Promise<Credential> => {
    try {
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

        await CredentialRepository.save(newCredential);

        return newCredential;
    } catch (error) {

        console.error("Error al crear las credenciales:", error);
        throw new Error("Error al crear las credenciales")
    }
}

const crypPass = async (password: string): Promise<string> => {

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const validateCredentialService = async (username: string, password: string): Promise<number | undefined> => {
    const usernameFound: Credential | null = await CredentialRepository.findOneBy({ username });

    if (!usernameFound) {
        throw new Error(`El usuario ${username} no fue encontrado`);
    }

    const isPasswordValid = await bcrypt.compare(password, usernameFound.password);

    if (!isPasswordValid) {
        throw new Error(`Usuario o contraseña incorrectos`);
    }

    return usernameFound.id;
};

