import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../helpers/database.config.js";

const db = sequelize();

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare USERNAME: string;
    declare PASSWORD: string;
}
User.init({
    USERNAME: {
        type: DataTypes.STRING(199),
        primaryKey: true
    },
    PASSWORD: {
        type: DataTypes.STRING(199),
        allowNull: false,
    }
}, {sequelize: db, tableName: "USERS", timestamps: false});