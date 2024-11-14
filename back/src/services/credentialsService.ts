import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [
    {
        id: 1,
        username: "Tomas",
        password: "password",
    },
];


export const addCredentialService = async (username: string, password: string): Promise<number> => {
    const newCredential = {
        id: credentials.length + 1,
        username,
        password,
    };
    credentials.push(newCredential)
    return newCredential.id;
}

export const validateCredentialService = async (username: string, password: string): Promise<number | null> => {
    const credential = credentials.find((cred) => cred.username === username || cred.password === password);
    return credential ? credential.id : null;
}

