import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
export default class DatabaseConfig {
  public static getInstance(): Sequelize {
    dotenv.config();
    return new Sequelize({
      dialect: "sqlite",
      storage: process.env.DB_HOST,
      pool: {
        max: 9,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }
}