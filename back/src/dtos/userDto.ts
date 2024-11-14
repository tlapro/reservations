// PARA RESGUARDAR LA INFO ESPECIFICA QUE QUIERO COMPARTIR
export interface IUserRegisterDTO {
    name: string,
    email: string,
    birthdate: string,
    nDni: number,
    username: string,
    password: string,
}

export interface IUserLoginDTO {
    username: string,
    password: string,
}
