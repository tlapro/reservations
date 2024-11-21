import UserRepository from "../repositories/UserRepository";
import {  IUserLoginDTO, IUserRegisterDTO, UserLoginSuccessDto } from "../dtos/userDto";
import { User } from "../entities/User";

import { addCredentialService, validateCredentialService } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {

      const users = await UserRepository.find({
        relations: ['appointments'], 
      });
      if (!users || users.length === 0) {
        throw new Error("No se encontraron usuarios.")
      }
      return users;

  };
export const getUserByIdService = async (id: number): Promise<User> => {
        const userFound = await UserRepository.findOne({
          where: { id },
          relations: ['appointments'],
        });

        if (!userFound) {
          throw new Error(`No se encontró el usuario con id: ${ id }`)
        }
        return userFound;
      }

export const registerUserService = async (userData: IUserRegisterDTO): Promise<User> => {
        try {
          const userFilteredData = {
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
          };

          const newUser: User = UserRepository.create(userFilteredData);
          const savedUser = await UserRepository.save(newUser);

          const credentialData = {
            username: userData.username,
            password: userData.password,
            user: savedUser.id, 
          };
      
          const newCredential = await addCredentialService(credentialData);
          savedUser.credentials = newCredential;
      
          await UserRepository.save(savedUser);
      
          return savedUser;
      
        } catch (error) {
          throw new Error(`Error al registrar el usuario ${error}`);
      };
    }

export const loginUserService = async (user: IUserLoginDTO): Promise<UserLoginSuccessDto> => {
  const credentialId: number | undefined = await validateCredentialService(user.username, user.password);

  const userFound: User | null = await UserRepository.findOne({
    where: {
      credentials: {
        id: credentialId
      }
    }
  })
  return {
    login: true,
    user: {
      id: userFound?.id ?? 0,
      name: userFound?.name ?? "",
      email: userFound?.email ?? "",
      birthdate: userFound?.birthdate ?? new Date(),
      nDni: userFound?.nDni ?? 0
    }
  }
}

