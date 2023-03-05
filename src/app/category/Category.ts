import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";
import Shop from "../shop/Shop.js";
import Product from "../product/Product.js";

const db = DatabaseConfig.getInstance();
export default class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    declare CATEGORY_NAME: string;
    declare S_ID: ForeignKey<Shop['S_ID']>;
    declare P_ID: ForeignKey<Product['P_ID']>;
}
Category.init({
    CATEGORY_NAME: {
        type: DataTypes.STRING(59),
    },
    S_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    P_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    sequelize: db, tableName: "CATEGORIES", timestamps: false
});
