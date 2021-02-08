import { Association, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Character } from "./Character";
import { Status } from "./Shared/Status";
import { Tag } from "./Tag";

interface UserAttributes {
  id: number;
  password: string;
  username: string;
  email: string;
  points: number | null;
  member: boolean;
  status: Status;
}

interface UserModel extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserModel>
  implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public points!: number | null;
  public member!: boolean;
  public status!: Status;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // getTags!
  public readonly tags?: Tag[];
  public readonly characters?: Character[];

  public static associations: {
    tags: Association<User, Tag>;
    characters: Association<User,Character>;
  };
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: new DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  email: {
    type: new DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  member: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  password: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  status: {
    type: DataTypes.ENUM,
    values: ["DELETED", "ACTIVED", "BANED", "PENDING"],
    defaultValue: "ACTIVED"
  }
},
{
  tableName: "user",
  timestamps: true,
  underscored: true,
  sequelize
});
