import { Association, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { Equipament } from "./Equipament";
import { Grade } from "./Grade";
import { Potion } from "./Potion";
import { Status } from "./Shared/Status";
import { Skill } from "./Skill";
import { Stats } from "./Stats";

interface CharacterAttributes {
  id: number;
  firstname: string;
  lastname: string | null;
  experience: number;
  status: Status;
  defence: number;
  attack: number;
  power: number;
  stamina: number;
  gold: number;
  life_points: number;
}

interface CharacterModel extends Optional<CharacterAttributes, "id"> {}

export class Character extends Model<CharacterAttributes, CharacterModel>
  implements CharacterAttributes {
  public id!: number;
  public firstname!: string;
  public lastname!: string | null;
  public experience!: number;
  public status!: Status;
  public defence!: number;
  public attack!: number;
  public power!: number;
  public stamina!: number;
  public gold!: number;
  public life_points!: number;
 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly potions?: Potion[];
  public readonly grades?: Grade[];
  public readonly stats?: Stats[];
  public readonly skills?: Skill[];
  public readonly equipaments?: Equipament[];

  public static associations: {
    potions: Association<Character, Potion>;
    grades: Association<Character, Grade>;
    stats: Association<Character, Stats>;
    skills: Association<Character, Skill>;
    equipaments: Association<Character, Equipament>;
  };
}

Character.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: new DataTypes.STRING(255),
    allowNull: false
  },
  lastname: {
    type: new DataTypes.STRING(255),
    defaultValue: null
  },
  attack: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  defence: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  gold: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  life_points: {
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
  tableName: "character",
  timestamps: true,
  underscored: true,
  sequelize
});
