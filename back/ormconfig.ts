/**
 * @module ormconfig
 *
 * Configured TypeORM for integration with NestJS.
 * This configuration includes database connection information,
 * paths to entities and migrations, and other TypeORM options.
 *
 *
 * @see https://docs.nestjs.com/techniques/database#typeorm-integration
 *
 * @see https://typeorm.io/#/connection-options
 *
 */

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormconfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  // Synchronisation automatique du schéma ( surtout ne pas utiliser en production ! )
  synchronize: process.env.TYPEORM_SYNC === "true",
  logging: process.env.TYPEORM_LOGGING === "true",
  migrations: [__dirname + "/../migrations/*.{js,ts}"],
};

export default ormconfig;
