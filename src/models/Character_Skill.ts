import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface CharacterSkillAttributes {
  character_id: number;
  skill_id: number;
}

interface CharacterSkillModel extends Optional<CharacterSkillAttributes, "character_id" & "skill_id"> { }

export class CharacterSkill extends Model<CharacterSkillAttributes, CharacterSkillModel>
  implements CharacterSkillAttributes {
  public character_id!: number;
  public skill_id!: number;

}

CharacterSkill.init({
  character_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  skill_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
},
  {
    tableName: "character_skill",
    timestamps: true,
    underscored: true,
    sequelize
  });