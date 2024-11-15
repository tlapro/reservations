import { CredentialModel, UserModel } from "../config/data-source";
import { credentialDTO } from "../dtos/credentialDTO";
import { Credential } from "../entities/Credential";


export const addCredentialService = async (credentialsData: credentialDTO): Promise<Credential> => {
    const user = await UserModel.findOne({ where: { id: credentialsData.user } });
    if (!user) {
        throw new Error("User not found");
    }
    const newCredential = CredentialModel.create({
        username: credentialsData.username,
        password: credentialsData.password,
        user, 
    });
    await CredentialModel.save(newCredential);
    return newCredential;
}

// export const validateCredentialService = async (username: string, password: string): Promise<number | null> => {
//     const credential: ICredential = credentials.find((cred) => cred.username === username || cred.password === password);
//     return credential ? credential.id : null;
// }

