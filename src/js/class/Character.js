const MIN_LENGTH = 2;
const MAX_LENGTH = 10;
const TYPES = [
  "Bowerman",
  "Zombie",
  "Daemon",
  "Magician",
  "Swordsman",
  "Undead",
];

export default class Character {
    constructor(name, type) {
      if (name.length < 2 && name.length > 10) {
        throw new Error(
          `Имя персонажа доллно быть не менее ${MIN_LENGTH} и не более ${MAX_LENGTH}`
        );
      }
  
      if (!TYPES.includes(type)) {
        throw new Error(
          `Неверно введен тип персонада, выберите и введите одно из значений: ${TYPES.join(", ")}`
        );
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
    levelUp() {
      if (this.health > 0) {
        this.level++;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
      } else {
        throw new Error("нельзя повысить левел умершего");
      }
    }
    damage(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    }
  }