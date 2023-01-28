class Hero {
  constructor(name) {
    this.nameHero = name;
    this.levelHero = 1;
    this.hpHero = 0;
    this.hpHeroMax = 0;
    this.baseDamageHero = 0;
    this.currentXp = 0;
    this.xpNeedToLevelUp = 0;
    this.coinsTotal = 10;
    this.imageAttackBtn = 0;
  }
  startHero() {
    this.hpHeroGenerator();
    this.xpNeedToLevelUpGenerator();
    this.baseDamageHeroGenerator();
  }
  hpHeroGenerator() {
    let auxHeroHp = (120 * this.levelHero) / 2;
    this.hpHero = auxHeroHp;
    this.hpHeroMax = auxHeroHp;
  }

  xpNeedToLevelUpGenerator() {
    this.xpNeedToLevelUp = this.levelHero * 50;
  }
  baseDamageHeroGenerator() {
    let auxHeroDamage = (30 * this.levelHero) / 2;
    this.baseDamageHero = auxHeroDamage;
  }
}
