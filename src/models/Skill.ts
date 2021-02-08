import { Association, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Character } from "./Character";
import { Status } from "./Shared/Status";
import { SkillPreRequisite } from "./Skill_pre_requisite";

interface SkillAttributes {
  id: number;
  name: string;
  description: string;
  defence: number;
  attack: number;
  power: number;
  stamina: number;
  status: Status;
}

interface SkillModel extends Optional<SkillAttributes, "id"> {}

export class Skill extends Model<SkillAttributes, SkillModel>
  implements SkillAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public experience!: number;
  public status!: Status;
  public defence!: number;
  public attack!: number;
  public power!: number;
  public stamina!: number;
 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly characters?: Character[];
  public readonly preRequisite?: SkillPreRequisite[];

  public static associations: {
    characters: Association<Skill, Character>;
    preRequisite: Association<Skill, SkillPreRequisite>;
  };
}

Skill.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: new DataTypes.STRING(255),
    defaultValue: " "
  },
  attack: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  defence: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  power: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  stamina: {
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
  tableName: "skill",
  timestamps: true,
  underscored: true,
  sequelize
});
