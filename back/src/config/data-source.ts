import { DataSource } from "typeorm";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { DB_DATABASE, DB_DROP, DB_HOST, DB_LOGGING, DB_PASSWORD, DB_PORT, DB_SYNC, DB_TYPE, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dropSchema: DB_DROP,
    synchronize: DB_SYNC, // modifica tablas automáticamente.
    logging: DB_LOGGING,
    entities: [User, Credential, Appointment],
})
