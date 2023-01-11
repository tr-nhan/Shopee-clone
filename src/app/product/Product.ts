import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../helpers/database.config.js";

const db = sequelize();
export default class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare P_ID: number;
    declare NAME: string;
    declare DESCRIPTION: string | null;
    declare IMAGE: string | null;
    declare PRICE: number;
    declare AMOUNT_LEFT: number;
    declare TAG: string;
}
Product.init({
    P_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NAME: {
        type: DataTypes.STRING(59),
        allowNull: false,
    },
    DESCRIPTION: {
        type: DataTypes.TEXT
    },
    IMAGE: {
        type: DataTypes.TEXT
    },
    PRICE: {
        type: DataTypes.REAL,
        defaultValue: 0
    },
    AMOUNT_LEFT: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    TAG: {
        type: DataTypes.STRING(99),
        defaultValue: "others",
    }
}, {sequelize: db, tableName: "PRODUCTS", timestamps: false})