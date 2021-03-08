import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Status } from "./Shared/Status";

interface AdminAttributes {
  id: number;
  username: string;
  email: string;
  access_type: number;
  status: Status;
  contact_number: string;
}

interface AdminModel extends Optional<AdminAttributes, "id"> { }

export class Admin extends Model<AdminAttributes, AdminModel>
  implements AdminAttributes {

  public id!: number;
  public username!: string;
  public email!: string;
  public access_type!: number;
  public status!: Status;
  public contact_number!: string;


}

Admin.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  access_type: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  contact_number: {
    type: DataTypes.STRING(11),
    defaultValue: null
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.ENUM,
    values: ["ACTIVED", "BANED", "DELETED", "PENDING"],
    defaultValue: "ACTIVED"
  }
},
  {
    tableName: "admin",
    timestamps: true,
    underscored: true,
    sequelize
  });