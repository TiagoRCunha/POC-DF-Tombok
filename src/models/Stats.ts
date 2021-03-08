import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface StatsAttributes {
  id: number;
  name: string;
  description: string;
  type: number;
  amount: number;
}

interface StatsModel extends Optional<StatsAttributes, "id"> { }

export class Stats extends Model<StatsAttributes, StatsModel>
  implements StatsAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public type!: number;
  public amount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

Stats.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  description: {
    type: new DataTypes.STRING(500),
    defaultValue: " ",
  },
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  type: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
},
  {
    tableName: "stats",
    timestamps: true,
    underscored: true,
    sequelize
  });
