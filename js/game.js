// Jogo abaixo

class Gameboard {
  constructor() {
    this.xpAcumulado = 0;
    this.finalLevelHero = 0;
    this.quantityMonsterDefeat = 0;
    this.backgroundBattle = 0;
    this.totalPoints = 0;
  }

  newGame() {
    // const nameHeroSelect = document.getElementsByClassName("nomeHero")[0].value;
    // const hero = new Hero(`${nameHeroSelect}`);
    // console.log(nameHeroSelect);
    // hero.startHero(nameHeroSelect.innerHTML);
    this.createMonster();
    this.setupHeroInDisplay();
    removeClass("boardGame", "hidden");
    addClass("modular", "hidden");
    this.currentStatus();
  }

  createMonster() {
    monster.startMonster(hero.levelHero);

    this.setupMonsterInDisplay();
  }

  setupMonsterInDisplay() {
    // essa função irá configurar o background e o monstro novo no HTML

    document.getElementsByClassName(
      "imageMonster"
    )[0].src = `./images/personagens/monsters/${monster.imageMonster}`;

    document.getElementsByClassName("nameEnemy")[0].innerHTML =
      monster.nameMonster;
    document.getElementsByClassName("levelEnemy")[0].innerHTML =
      monster.levelMonster;
    document.getElementsByClassName("hpRealEnemy")[0].style.width = "100%";
    document.getElementsByClassName("classEnemy")[0].innerHTML =
      monster.typeMonster;
    document.getElementsByClassName("rarityEnemy")[0].innerHTML =
      monster.rarityMonster;
    document.getElementsByClassName("powerEnemy")[0].innerHTML =
      monster.powerMonster;
  }

  currentStatus() {
    // Atualiza os status do herói e do monstro
    setInterval(() => {
      document.getElementsByClassName(
        "hpRealHeroText"
      )[0].innerHTML = `${hero.hpHero}/${hero.hpHeroMax}`;
      document.getElementsByClassName(
        "xpRealHeroText"
      )[0].innerHTML = `${hero.currentXp}/${hero.xpNeedToLevelUp}`;
      document.getElementsByClassName(
        "hpRealEnemyText"
      )[0].innerHTML = `${monster.hpMonster}/${monster.hpMonsterMax}`;
      document.getElementsByClassName(
        "rgRealHeroText"
      )[0].innerHTML = `${hero.rgHero}/${hero.rgHeroMax}`;
      widthStatus(hero.hpHero, hero.hpHeroMax, "hpRealHero");
      widthStatus(hero.rgHero, hero.rgHeroMax, "rgRealHero");
      widthStatus(hero.currentXp, hero.xpNeedToLevelUp, "xpRealHero");
    }, 100);
  }

  setupHeroInDisplay() {
    document.getElementsByClassName("nameHero")[0].innerHTML =
      document.getElementsByClassName("nomeHero")[0].value;
    document.getElementsByClassName("hpRealHero")[0].style.width = "100%";
    document.getElementsByClassName("xpRealHero")[0].style.width = "0%";
    document.getElementsByClassName("levelHero")[0].innerHTML = hero.levelHero;
  }

  deathConference() {
    if (monster.hpMonster <= 0) {
      document.getElementsByClassName("hpRealEnemy")[0].style.width = "0%";
      document.getElementsByClassName(
        "textBattleLog"
      )[0].innerHTML = `Você venceu, estamos procurando um novo inimigo`;

      setTimeout(() => {
        this.createMonster();
        document.getElementsByClassName(
          "textBattleLog"
        )[0].innerHTML = `Escolha uma ação`;
      }, 3000);
      this.xpUpHero(); // aumenta o xp atual do personagem
      hero.coinsTotal += monster.coinsValue;
      this.quantityMonsterDefeat += 1; // aumenta a quantidade de monstros mortos para calcular a pontuação final
      this.xpAcumulado += monster.xpValue; // soma a quantidade total de xp recebido para calcular a pontuação final
    } else {
      this.monsterAction();
    }
  }

  deathConferenceHero() {
    if (hero.hpHero <= 0) {
      document.getElementsByClassName("hpRealHero")[0].style.width = "0%";
      document.getElementsByClassName(
        "textBattleLog"
      )[0].innerHTML = `Você sucumbiu aos fortes inimigos, tente novamente`;
      hero.heroAttack = 0;
      monster.baseDamageMonster = 0;
      this.valuePoints();
      setTimeout(() => {
        addClass("boardGame", "hidden");
        removeClass("defeatScreen", "hidden");
        document.getElementsByClassName(
          "valuePoints"
        )[0].innerHTML = `${this.totalPoints}`;
      }, 2000);
    }
  }

  valuePoints() {
    this.totalPoints =
      this.xpAcumulado * 10 +
      this.quantityMonsterDefeat * 100 +
      hero.levelHero * 100;
  }

  monsterAction() {
    setTimeout(() => {
      const rangeMult = [0.7, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 1.5];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterDamagetoConvert = monster.baseDamageMonster * randomMult;
      hero.hpHero -= Math.round(monsterDamagetoConvert);
      widthStatus(hero.hpHero, hero.hpHeroMax, "hpRealHero"); // função sendo puxada da function.js

      document.getElementsByClassName("battleLog")[0].style.background =
        "#d5477a";
      document.getElementsByClassName("textBattleLog")[0].innerHTML = `${
        hero.nameHero
      } Recebeu ${Math.floor(monsterDamagetoConvert)} de dano do inimigo`;
      addClass("imageMonster", "attackAnimationMonster");
      setTimeout(() => {
        removeClass("imageMonster", "attackAnimationMonster");
      }, 400);
    }, 1000);

    setTimeout(() => {
      document.getElementsByClassName(
        "textBattleLog"
      )[0].innerHTML = `Escolha uma ação`;
      document.getElementsByClassName("battleLog")[0].style.background =
        "rgba(229, 229, 229, 0.5)";
    }, 4000);
    this.deathConferenceHero();
  }

  heroAttack() {
    desabilitarAllBtn(); // função está na function.js
    //multiplicador de ataque abaixo
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let heroDamagetoConvert = hero.baseDamageHero * randomMult;
    monster.hpMonster -= Math.round(heroDamagetoConvert);

    widthStatus(monster.hpMonster, monster.hpMonsterMax, "hpRealEnemy");

    document.getElementsByClassName("battleLog")[0].style.background =
      "#44ABE5";
    document.getElementsByClassName("textBattleLog")[0].innerHTML = `${
      hero.nameHero
    } Tirou ${Math.floor(heroDamagetoConvert)} de dano do inimigo`;

    addClass("imageHero", "attackAnimationHero");
    setTimeout(() => {
      removeClass("imageHero", "attackAnimationHero");
    }, 400);
    hero.rgHero += 10;
    if (hero.rgHero > hero.rgHeroMax) {
      hero.rgHero = hero.rgHeroMax;
    }
    this.deathConference();
    this.deathConferenceHero();
  }
  heroSpecialAttack() {
    desabilitarAllBtn(); // função está na function.js
    hero.rgHero -= 25;
    widthStatus(hero.rgHero, hero.rgHeroMax, "rgRealHero");
    //multiplicador de ataque abaixo
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let heroDamagetoConvert = hero.baseDamageHero * randomMult;
    monster.hpMonster -= Math.round(heroDamagetoConvert);

    widthStatus(monster.hpMonster, monster.hpMonsterMax, "hpRealEnemy"); // aqui fora para atualizar no primeiro ataque

    addClass("imageHero", "attackAnimationHero"); // 1° animação fora
    setTimeout(() => {
      removeClass("imageHero", "attackAnimationHero"); // 2° retira classe da animação
      randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let heroDamagetoConvert2 = hero.baseDamageHero * randomMult;
      monster.hpMonster -= Math.round(heroDamagetoConvert);
      document.getElementsByClassName("battleLog")[0].style.background =
        "#44ABE5";
      document.getElementsByClassName("textBattleLog")[0].innerHTML = `${
        hero.nameHero
      } Tirou ${Math.floor(
        heroDamagetoConvert + heroDamagetoConvert2
      )} de dano do inimigo`;
    }, 400);

    setTimeout(() => {
      addClass("imageHero", "attackAnimationHero");
      widthStatus(monster.hpMonster, monster.hpMonsterMax, "hpRealEnemy"); // aqui dentro para atualizar no segundo ataque
    }, 800);

    setTimeout(() => {
      removeClass("imageHero", "attackAnimationHero");
      this.deathConference();
      this.deathConferenceHero();
    }, 1200);
  }
  xpUpHero() {
    hero.currentXp += monster.xpValue;
    widthStatus(hero.currentXp, hero.xpNeedToLevelUp, "xpRealHero");
    this.levelUp();
  }
  levelUp() {
    if (hero.currentXp >= hero.xpNeedToLevelUp) {
      hero.levelHero += 1;
      hero.startHero();
      document.getElementsByClassName("levelHero")[0].innerHTML =
        hero.levelHero;
      document.getElementsByClassName("xpRealHero")[0].style.width = "0%";
    }
    // adicionar animação em CSS para subir de nível e uma informação no battle log
  }
  hpRecovey() {
    desabilitarAllBtn();

    document.getElementsByClassName(
      "textBattleLog"
    )[0].innerHTML = `Você recuperou 30% de vida`;
    document.getElementsByClassName("battleLog")[0].style.background =
      "#44E5BF";
    hero.hpHero = hero.hpHero + hero.hpHeroMax * 0.3;

    if (hero.hpHero > hero.hpHeroMax) {
      hero.hpHero = hero.hpHeroMax;
    }
    widthStatus(hero.hpHero, hero.hpHeroMax, "hpRealHero");
    setTimeout(() => {
      document.getElementsByClassName(
        "textBattleLog"
      )[0].innerHTML = `Escolha uma ação`;
      document.getElementsByClassName("battleLog")[0].style.background =
        "rgba(229, 229, 229, 0.5)";
      this.monsterAction();
    }, 1500);
  }
}
const game = new Gameboard();

window.addEventListener("load", () => {
  const attackBtn = document.getElementsByClassName("eventListenerAttack")[0];
  attackBtn.addEventListener("click", () => {
    game.heroAttack();
  });

  const newGameBtn = document.getElementsByClassName("newGame")[0];
  newGameBtn.addEventListener("click", () => {
    game.newGame();
  });

  const hpRecoveryBtn = document.getElementsByClassName(
    "eventListenerHpRecovery"
  )[0];
  hpRecoveryBtn.addEventListener("click", () => {
    game.hpRecovey();
  });

  const specialAttackBtn = document.getElementsByClassName(
    "eventListenerSpecialAttack"
  )[0];
  specialAttackBtn.addEventListener("click", () => {
    if (hero.rgHero >= 25) {
      game.heroSpecialAttack();
    }
  });
});

const nameHeroSelect = document.getElementsByClassName("nomeHero")[0].value;
const hero = new Hero(`${nameHeroSelect}`);
hero.startHero();
