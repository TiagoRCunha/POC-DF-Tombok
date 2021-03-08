import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import { Status } from "./Shared/Status";

interface SkillPreRequisiteAttributes {
  id: number;
  member_only: boolean;
  experience_required: number;
  description: string;
  type: number;
  status: Status;
}

interface SkillPreRequisiteModel extends Optional<SkillPreRequisiteAttributes, "id"> { }

export class SkillPreRequisite extends Model<SkillPreRequisiteAttributes, SkillPreRequisiteModel>
  implements SkillPreRequisiteAttributes {

  public id!: number;
  public member_only!: boolean;
  public experience_required!: number;
  public description!: string;
  public type!: number;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

SkillPreRequisite.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: new DataTypes.STRING(255),
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
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM,
    values: ["DELETED", "ACTIVED", "BANED", "PENDING"],
    defaultValue: "ACTIVED"
  }
},
  {
    tableName: "skill_pre_requisite",
    timestamps: true,
    underscored: true,
    sequelize
  });
