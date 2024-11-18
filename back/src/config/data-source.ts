import { DataSource } from "typeorm";
import { DB_NAME, DB_DROP, DB_HOST, DB_LOGGING, DB_PASSWORD, DB_PORT, DB_SYNC, DB_TYPE, DB_USERNAME, DB_ENTITIES } from "./envs";

export const AppDataSource = new DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: DB_DROP,
    synchronize: DB_SYNC, // modifica tablas automáticamente.
    logging: DB_LOGGING,
    entities: DB_ENTITIES,
})
