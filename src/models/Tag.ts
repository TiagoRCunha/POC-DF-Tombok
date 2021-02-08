import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Status } from "./Shared/Status";

interface TagAttributes {
  id: number;
  name: string;
  description: string | null;
  member_only: boolean;
  status: Status;
}

interface TagModel extends Optional<TagAttributes, "id"> {}

export class Tag extends Model<TagAttributes, TagModel>
  implements TagAttributes {
  public id!: number;
  public name!: string;
  public description!: string | null;
  public member_only!: boolean;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // public static associations: {
  //   projects: Association<User, Project>;
  // };
}

Tag.init({
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
  tableName: "tag",
  timestamps: true,
  underscored: true,
  sequelize
});
