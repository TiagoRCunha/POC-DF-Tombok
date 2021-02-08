import { Association, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { EquipamentPreRequisite } from "./Equipament_pre_requisite";
import { Status } from "./Shared/Status";

interface EquipamentAttributes {
  id: number;
  name: string;
  description: string;
  defence: number;
  attack: number;
  durability_max: number;
  durability: number;
  effect_power: number;
  amount: number;
  type: number;
  status: Status;
}

interface EquipamentModel extends Optional<EquipamentAttributes, "id"> {}

export class Equipament extends Model<EquipamentAttributes, EquipamentModel>
  implements EquipamentAttributes {
  
  public id!: number;
  public name!: string;
  public description!: string;
  public defence!: number;
  public attack!: number;
  public durability_max!: number;
  public durability!: number;
  public effect_power!: number;
  public amount!: number;
  public type!: number;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly preRequisites?: EquipamentPreRequisite[];

  public static associations: {
    preRequisites: Association<Equipament, EquipamentPreRequisite>;
  };
}

Equipament.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: new DataTypes.STRING(500),
    defaultValue: " "
  },
  durability: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  durability_max: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  effect_power: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  name: {
    type: DataTypes.STRING(255),
    defaultValue: ""
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  attack: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  defence: {
    type: DataTypes.INTEGER,
    defaultValue: 0
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
