import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Status } from "./Shared/Status";

interface EquipamentPreRequisiteAttributes {
  id: number;
  description: string;
  type: number;
  cost: number;
  status: Status;
  experience_required: number;
  member_only: boolean;
}

interface EquipamentPreRequisiteModel extends Optional<EquipamentPreRequisiteAttributes, "id"> { }

export class EquipamentPreRequisite
  extends Model<EquipamentPreRequisiteAttributes, EquipamentPreRequisiteModel>
  implements EquipamentPreRequisiteAttributes {

  public id!: number;
  public description!: string;
  public type!: number;
  public cost!: number;
  public status!: Status;
  public experience_required!: number;
  public member_only!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

EquipamentPreRequisite.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  cost: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING(500),
    defaultValue: " "
  },
  experience_required: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  member_only: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  type: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  status: {
    type: DataTypes.ENUM,
    values: ["DELETED", "ACTIVED", "BANED", "PENDING"],
    defaultValue: "ACTIVED"
  }
},
  {
    tableName: "equipament_pre_requisite",
    timestamps: true,
    underscored: true,
    sequelize
  });
