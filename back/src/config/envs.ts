/* eslint-disable @typescript-eslint/prefer-as-const */
import dotenv from "dotenv";
dotenv.config();


export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002
export const DB_TYPE: "postgres" = "postgres"
export const DB_HOST: string | undefined = process.env.DB_HOST
export const DB_PORT: number | undefined = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432

export const DB_USERNAME: string | undefined = process.env.DB_USERNAME
export const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD
export const DB_DATABASE: string | undefined = process.env.DB_DATABASE
export const DB_SYNC: boolean = process.env.DB_SYNC ? process.env.DB_SYNC === "true" : true
export const DB_LOGGING: boolean = process.env.DB_LOGGING ? process.env.DB_LOGGING === "true" : true
export const DB_ENTITIES = []

export const DB_DROP: boolean = process.env.DB_DROP ? process.env.DB_DROP === "true" : true