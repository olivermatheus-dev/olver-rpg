class Hero {
  constructor(name) {
    this.nameHero = name;
    this.levelHero = 1;
    this.hpHero = 0;
    this.baseDamageHero = 0;
    this.currentXp = 0;
    this.xpNeedToLevelUp = 0;
  }
  startHero() {
    this.hpHeroGenerator();
    this.xpNeedToLevelUpGenerator();
    this.baseDamageHeroGenerator();
  }
  hpHeroGenerator() {
    let auxHeroHp = (120 * this.levelHero) / 2;
    this.hpHero = auxHeroHp;
  }

  levelUpHero() {
    this.levelHero += 1;
    this.hpHeroGenerator();
  }

  xpNeedToLevelUpGenerator() {
    this.xpNeedToLevelUp = this.levelHero * 100;
  }
  baseDamageHeroGenerator() {
    let auxHeroDamage = (30 * this.levelHero) / 2;
    this.baseDamageHero = auxHeroDamage;
  }
}

const hero = new Hero("Guerreiro");
hero.startHero();
console.log(hero);
