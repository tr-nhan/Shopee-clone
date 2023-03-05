import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";

const db = DatabaseConfig.getInstance();

export default class Shop extends Model<InferAttributes<Shop>, InferCreationAttributes<Shop>> {
    declare S_ID: number;
    declare S_NAME: string;
    declare S_AVATAR: string;
    declare TYPE: string;
}
Shop.init({
    S_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    S_NAME: {
        type: DataTypes.STRING(199),
        allowNull: false,
    },
    S_AVATAR: {
        type: DataTypes.TEXT,
    },
    TYPE: {
        type: DataTypes.STRING(29)
    }
}, {
    sequelize: db, tableName: "SHOPS", timestamps: false,
});
