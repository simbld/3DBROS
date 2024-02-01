/**
 * @module ormconfig
 *
 * Configured TypeORM for integration with NestJS.
 * This configuration includes database connection information,
 * paths to entities and migrations, and other TypeORM options.
 *
 *@warning Syncing the database schema with the entities is not recommended for production.

 // For production, set the following environment variables:
 - synchronize: process.env.TYPEORM_SYNC === "false"
 

 * @see https://docs.nestjs.com/techniques/database#typeorm-integration
 *
 * @see https://typeorm.io/#/connection-options
 *
 */

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormconfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || "5433"),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_NAME,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: process.env.TYPEORM_SYNC === "true",
  logging: process.env.TYPEORM_LOGGING === "true",
  migrations: [__dirname + "/../migrations/*.{js,ts}"],
};

export default ormconfig;
