import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
export default class DatabaseConfig {
  public static getInstance(): Sequelize {
    dotenv.config();
    return new Sequelize(process.env.DB_HOST!,{
      dialect: "postgres",
      quoteIdentifiers: false,
      schema: process.env.DB_SCHEMA,
      pool: {
        max: 9,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }
}