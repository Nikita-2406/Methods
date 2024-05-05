// TODO: write your code here
console.clear();
class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
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

export class Bowerman extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Bowerman") {
      super(name, type, 25, 25);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Zombie") {
      super(name, type, 40, 10);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Daemon") {
      super(name, type, 10, 40);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}

export class Magician extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Magician") {
      super(name, type, 10, 40);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Swordsman") {
      super(name, type, 40, 10);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}

export class Undead extends Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10 && type === "Undead") {
      super(name, type, 25, 25);
    } else {
      throw new Error("НЕ соблюдаются правила игры");
    }
  }
}
