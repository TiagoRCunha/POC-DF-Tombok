import { Admin } from "./Admin";
import { Character } from "./Character";
import { CharacterSkill } from "./Character_Skill";
import { Equipament } from "./Equipament";
import { EquipamentPreRequisite } from "./Equipament_pre_requisite";
import { Grade } from "./Grade";
import { Potion } from "./Potion";
import { Skill } from "./Skill";
import { SkillPreRequisite } from "./Skill_pre_requisite";
import { Stats } from "./Stats";
import { Tag } from "./Tag";
import { User } from "./User";

Tag.belongsTo(User, { targetKey: "id" });
User.hasMany(Tag, { sourceKey: "id", as: "tags" });

Character.belongsTo(User, { targetKey: "id" });
User.hasMany(Character, { sourceKey: "id", as: "characters" });

Potion.belongsTo(Character, { targetKey: "id" });
Character.hasMany(Potion, { sourceKey: "id", as: "potions" });

Grade.belongsTo(Character, { targetKey: "id" });
Character.hasMany(Grade, { sourceKey: "id", as: "grades" });

Stats.belongsTo(Character, { targetKey: "id" });
Character.hasMany(Stats, { sourceKey: "id" });

CharacterSkill.belongsTo(Skill, { foreignKey: "skill_id" });
CharacterSkill.belongsTo(Character, { foreignKey: "character_id" });

Skill.belongsToMany(Character, {
  through: typeof CharacterSkill,
  foreignKey: "skill_id",
  otherKey: "character_id"
});
Character.belongsToMany(Skill, {
  through: typeof CharacterSkill,
  foreignKey: "character_id",
  otherKey: "skill_id"
});

SkillPreRequisite.belongsTo(Skill, { targetKey: "id" });
Skill.hasMany(SkillPreRequisite, { sourceKey: "id", as: "pre-requisite" });

Equipament.belongsTo(Character, { targetKey: "id" });
Character.hasMany(Equipament, { sourceKey: "id", as: "equipaments" });

EquipamentPreRequisite.belongsTo(Equipament, { targetKey: "id" });
Equipament.hasMany(EquipamentPreRequisite, { sourceKey: "id", as: "pre-requisite" });

( async () => {
  try {
    await User.sync({ force: true });
    await Tag.sync({ force: true });
    await Character.sync({ force: true });
    await Potion.sync({ force: true });
    await Grade.sync({ force: true });
    await Stats.sync({ force: true });
    await Skill.sync({ force: true });
    await CharacterSkill.sync({ force: true });
    await SkillPreRequisite.sync({ force: true });
    await Equipament.sync({ force: true });
    await EquipamentPreRequisite.sync({ force: true });
    await Admin.sync({ force: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
})();