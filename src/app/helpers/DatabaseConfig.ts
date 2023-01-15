import {Sequelize} from "sequelize";
import * as dotenv from "dotenv"

dotenv.config();
export default class DatabaseConfig {
    public static getInstance(): Sequelize {
        return new Sequelize({
            dialect: "sqlite",
            storage: process.env.DB_SOURCE,
            pool: {
                max: 9,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })
    }
}