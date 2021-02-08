import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Status } from "./Shared/Status";

interface GradeAttributes {
  id: number;
  name: string;
  description: string;
  member_only: boolean;
  status: Status;
}

interface GradeModel extends Optional<GradeAttributes, "id"> {}

export class Grade extends Model<GradeAttributes, GradeModel>
  implements GradeAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public member_only!: boolean;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

Grade.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(254),
    allowNull: false
  },
  description: {
    type: new DataTypes.STRING(500),
    defaultValue: " "
  },
  member_only: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.ENUM,
    values: ["DELETED", "ACTIVED", "BANED", "PENDING"],
    defaultValue: "ACTIVED"
  }
},
{
  tableName: "grade",
  timestamps: true,
  underscored: true,
  sequelize
});
