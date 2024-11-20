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
export interface IUserDTO {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni:number
}
export interface UserLoginSuccessDto {
    login: boolean,
    user: IUserDTO
}