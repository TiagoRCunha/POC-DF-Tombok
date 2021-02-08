import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Status } from "./Shared/Status";

interface PotionAttributes {
  id: number;
  name: string;
  description: string;
  member_only: boolean;
  amount: string;
  type: number;
  effect_power: number;
  status: Status;
}

interface PotionModel extends Optional<PotionAttributes, "id"> {}

export class Potion extends Model<PotionAttributes, PotionModel>
  implements PotionAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public member_only!: boolean;
  public amount!: string;
  public type!: number;
  public effect_power!: number;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // public static associations: {
  //   projects: Association<User, Project>;
  // };
}

Potion.init({
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
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  effect_power: {
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
  tableName: "potion",
  timestamps: true,
  underscored: true,
  sequelize
});
