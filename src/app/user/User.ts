import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import DatabaseConfig from "../helpers/DatabaseConfig.js";

const db = DatabaseConfig.getInstance();

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare USERNAME: string;
  declare PASSWORD: string;
  declare ADMIN_RIGHTS: number;
  declare SELLER_RIGHTS: number;
  declare BAN_LIFT_TIME: number;
  declare BAN_REASON: string | null;
}
User.init({
    USERNAME: {
      type: DataTypes.STRING(199),
      primaryKey: true
    },
    PASSWORD: {
      type: DataTypes.STRING(199)
    },
    ADMIN_RIGHTS: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      },
      defaultValue: 0
    },
    SELLER_RIGHTS: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 0
      },
      defaultValue: 0
    },
    BAN_LIFT_TIME: {
      type: DataTypes.INTEGER,
      validate: {
        min: -1
      },
      defaultValue: 0
    },
    BAN_REASON: {
      type: DataTypes.STRING(59)
    }
  }, {
    sequelize: db, tableName: "USERS", timestamps: false,
    validate: {
      banTimeIsExist() {
        if (this.BAN_RESON !== null && parseInt(this.BAN_LIFT_TIME!.toString()) !== 0) {
          throw new Error("Constraint violated! Ban time does not exist");
        }
      }
    }
  }
);