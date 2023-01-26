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
    document.getElementsByClassName("hpRealEnemy")[0].style.width = "99%";
    document.getElementsByClassName("classEnemy")[0].innerHTML =
      monster.typeMonster;
  }

  currentStatus() {
    // deve atualizar toda vez que houver um ataque mostrando vida atual, ataque base e etc
    // atualizar também quando subir de nível
  }

  setupHeroInDisplay() {
    document.getElementsByClassName("nameHero")[0].innerHTML =
      document.getElementsByClassName("nomeHero")[0].value;
    document.getElementsByClassName("hpRealHero")[0].style.width = "99%";
    document.getElementsByClassName("xpRealHero")[0].style.width = "0%";
    document.getElementsByClassName("levelHero")[0].innerHTML = hero.levelHero;
    document.getElementsByClassName(
      "hpRealHeroText"
    )[0].innerHTML = `${hero.hpHero}/${hero.hpHeroMax}`;
  }

  deathConference() {
    if (monster.hpMonster <= 0) {
      document.getElementsByClassName("hpRealEnemy")[0].style.width = "0%";
      document.getElementsByClassName(
        "textBattleLog"
      )[0].innerHTML = `Você venceu, estamos procurando um novo inimigo`;
      this.xpUpHero();
      setTimeout(() => {
        this.createMonster();
        document.getElementsByClassName(
          "textBattleLog"
        )[0].innerHTML = `Escolha uma ação`;
      }, 3000);
      this.quantityMonsterDefeat += 1;
      this.xpAcumulado += monster.xpValue;
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
      const rangeMult = [
        0.7, 0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 3,
      ];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterDamagetoConvert = monster.baseDamageMonster * randomMult;
      hero.hpHero -= Math.round(monsterDamagetoConvert);
      let monsterDamageConvert =
        (+monsterDamagetoConvert * 99) / hero.hpHeroMax;
      let hpHeroCurrentValue =
        document.getElementsByClassName("hpRealHero")[0].style.width;
      let hpHeroNewValue =
        +hpHeroCurrentValue.slice(0, 2) - monsterDamageConvert;
      document.getElementsByClassName(
        "hpRealHero"
      )[0].style.width = `${hpHeroNewValue}%`;
      document.getElementsByClassName("battleLog")[0].style.background =
        "#d5477a";
      document.getElementsByClassName("textBattleLog")[0].innerHTML = `${
        hero.nameHero
      } recebeu ${Math.floor(monsterDamagetoConvert)} de dano do inimigo`;
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
    document.getElementsByClassName(
      "hpRealHeroText"
    )[0].innerHTML = `${hero.hpHero}/${hero.hpHeroMax}`;
  }

  heroAttack() {
    // tentativa de desabilitar botão
    document
      .getElementsByClassName(`eventListenerAttack`)[0]
      .classList.add(`hidden`);
    document.getElementsByClassName(`btn-attack`)[1].classList.remove(`hidden`);
    setTimeout(() => {
      document
        .getElementsByClassName(`eventListenerAttack`)[0]
        .classList.remove(`hidden`);
      document.getElementsByClassName(`btn-attack`)[1].classList.add(`hidden`);
    }, 2000);

    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let heroDamagetoConvert = hero.baseDamageHero * randomMult;
    monster.hpMonster -= Math.round(heroDamagetoConvert);
    console.log("Ataque do herói após multiplicador:" + heroDamagetoConvert);
    let heroDamageConvert = (+heroDamagetoConvert * 99) / monster.hpMonsterMax;
    Math.round(heroDamageConvert); // solução
    console.log("Cálculo de porcentagem a ser tirado:" + heroDamageConvert);
    let hpEnemyCurrentValue =
      document.getElementsByClassName("hpRealEnemy")[0].style.width;
    let hpEnemyNewValue = +hpEnemyCurrentValue.slice(0, 2) - heroDamageConvert;
    // console.log(hpEnemyNewValue);
    document.getElementsByClassName(
      "hpRealEnemy"
    )[0].style.width = `${hpEnemyNewValue}%`;
    document.getElementsByClassName("battleLog")[0].style.background =
      "#44ABE5";
    document.getElementsByClassName("textBattleLog")[0].innerHTML = `${
      hero.nameHero
    } tirou ${Math.floor(heroDamagetoConvert)} de dano do inimigo`;
    this.deathConference();
    addClass("imageHero", "attackAnimationHero");
    setTimeout(() => {
      removeClass("imageHero", "attackAnimationHero");
    }, 400);
  }
  xpUpHero() {
    hero.currentXp += monster.xpValue;
    let xpHeroGainConvert = (monster.xpValue * 100) / hero.xpNeedToLevelUp;
    Math.round(xpHeroGainConvert);
    let xpCurrentValue =
      document.getElementsByClassName("xpRealHero")[0].style.width;

    if (xpCurrentValue.length === 3) {
      let xpNewValue = +xpCurrentValue.slice(0, 2) + xpHeroGainConvert;
      document.getElementsByClassName(
        "xpRealHero"
      )[0].style.width = `${xpNewValue}%`;
    }

    if (xpCurrentValue.length === 2) {
      let xpNewValue = +xpCurrentValue.slice(0, 1) + xpHeroGainConvert;
      document.getElementsByClassName(
        "xpRealHero"
      )[0].style.width = `${xpNewValue}%`;
    }
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
    document
      .getElementsByClassName(`eventListenerHpRecovery`)[0]
      .classList.add(`hidden`);
    document
      .getElementsByClassName(`btn-hpRecovery`)[1]
      .classList.remove(`hidden`);
    setTimeout(() => {
      document
        .getElementsByClassName(`eventListenerHpRecovery`)[0]
        .classList.remove(`hidden`);
      document
        .getElementsByClassName(`btn-hpRecovery`)[1]
        .classList.add(`hidden`);
    }, 2000);

    document.getElementsByClassName(
      "textBattleLog"
    )[0].innerHTML = `Você recuperou 30% de vida`;
    document.getElementsByClassName("battleLog")[0].style.background =
      "#44E5BF";
    let currentHpBar =
      document.getElementsByClassName("hpRealHero")[0].style.width;
    currentHpBar = +currentHpBar.slice(0, 2) + 30;
    if (currentHpBar > 99) {
      currentHpBar = 99;
    }
    document.getElementsByClassName(
      "hpRealHero"
    )[0].style.width = `${currentHpBar}%`;
    hero.hpHero = hero.hpHero + hero.hpHeroMax * 0.3;
    if (hero.hpHero > hero.hpHeroMax) {
      hero.hpHero = hero.hpHeroMax;
    }

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
});

function addClass(classElement, classToAdd) {
  document
    .getElementsByClassName(`${classElement}`)[0]
    .classList.add(`${classToAdd}`);
}

function removeClass(classElement, classToRemove) {
  document
    .getElementsByClassName(`${classElement}`)[0]
    .classList.remove(`${classToRemove}`);
}

// abaixo para pegar o nome digitado e atribuir ao personagem

const nameHeroSelect = document.getElementsByClassName("nomeHero")[0].value;
const hero = new Hero(`${nameHeroSelect}`);
hero.startHero();
