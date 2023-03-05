import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";
import User from "../user/User.js";
import Product from "../product/Product.js";

const db = DatabaseConfig.getInstance();
export default class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>>{
    declare C_ID: number;
    declare P_ID: ForeignKey<Product['P_ID']>;
    declare USERNAME: ForeignKey<User['USERNAME']>;
    declare CONTENT: string;
    declare CREATE_DATE: number;
    declare LASTMODIFY: number;
    declare RATING: number;
}
Comment.init({
    C_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    CONTENT: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    CREATE_DATE: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    LASTMODIFY:{
        type: DataTypes.INTEGER
    },
    RATING: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            max: 5,
            min: 0,
        }
    }
}, {
    sequelize: db, tableName: "COMMENTS", timestamps: false
});