import {DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";
import User from "../user/User.js";

const db = DatabaseConfig.getInstance();
export default class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare P_ID: number;
    declare NAME: string;
    declare DESCRIPTION: string | null;
    declare IMAGE: string | null;
    declare PRICE: number;
    declare AMOUNT_LEFT: number;
    declare TAG: string;
    declare CREATE_BY: string;
}
Product.init({
    P_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NAME: {
        type: DataTypes.STRING(59),
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
    },
    CREATE_BY: {
        type: DataTypes.STRING(199),
        references: {
            model: User,
            key: "USERNAME",
        }
    }
}, {sequelize: db, tableName: "PRODUCTS", timestamps: false})