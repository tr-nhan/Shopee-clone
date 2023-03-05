import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";
import User from "../user/User.js"

const db = DatabaseConfig.getInstance();
export default class Authentication extends Model<InferAttributes<Authentication>, InferCreationAttributes<Authentication>>{
    declare A_ID: string;
    declare USERNAME: ForeignKey<User['USERNAME']>;
    declare TOKEN: string;
}
Authentication.init({
    A_ID: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    TOKEN: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db, tableName: "AUTHENTICATION", timestamps: false,
});