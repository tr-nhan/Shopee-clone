import { Sequelize } from "sequelize";
import dotenv from "dotenv";

export default class DatabaseConfig {
  public static getInstance(): Sequelize {
    dotenv.config();
    if (process.env.DB_SOURCE == undefined) {
      throw new Error("Could not load the database source!");
    }
    return new Sequelize({
      dialect: "sqlite",
      storage: process.env.DB_SOURCE,
      pool: {
        max: 9,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }
}