import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../helpers/database.config.js";

const db = sequelize();
export default class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>>{
    declare P_ID: number;
    declare NAME: string;
    declare DESCRIPTION: string | null;
    declare IMAGE: string | null;
    declare AMOUNT_LEFT: number;
}
Product.init({
    P_ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    NAME:{
        type: DataTypes.STRING(99),
    },
    DESCRIPTION:{
        type: DataTypes.TEXT
    },
    IMAGE:{
        type: DataTypes.TEXT
    },
    AMOUNT_LEFT:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {sequelize: db, tableName: "PRODUCTS", timestamps: false})