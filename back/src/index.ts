import server from "./server";
import { DB_DROP, DB_ENTITIES, DB_HOST, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_TYPE, DB_USERNAME, PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

console.log("TypeORM Configurations:", {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: DB_SYNC,
    logging: DB_LOGGING,
    dropSchema: DB_DROP,
    entities: DB_ENTITIES,
  });


AppDataSource.initialize()
    .then(() => {
        console.log("Database Connection: OK!");
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error al conectar con la Base de Datos:", error);
    });


