// const hero1 = new Hero("Oliver");
// const monster1 = new Monster();

// console.log(hero1);
// console.log(monster1.startMonster(1));

// function attack() {
//   let hpEnemyValue =
//     document.getElementsByClassName("hpRealEnemy")[0].style.width;
//   if (!hpEnemyValue) {
//     hpEnemyValue = "99%";
//   }
//   let hpEnemyValueNumber = +hpEnemyValue.slice(0, 2);
//   let attackHero = 10;
//   hpEnemyValueNumber -= attackHero;
//   hpEnemyValue = `${hpEnemyValueNumber}%`;
//   console.log(hpEnemyValue);
//   document.getElementsByClassName("hpRealEnemy")[0].style.width = hpEnemyValue;
//   return;
// }

// Jogo abaixo

class Gameboard {
  constructor() {
    this.xpAcumulado = 0;
    this.finalLevelHero = 0;
    this.quantityMonsterDefeat = 0;
    this.currentMonster = {};
    this.hero = {};
    this.backgroundBattle = 0;
  }

  newGame() {
    // aqui vai entrar a função de gerar o boardGame, vou criar uma classe no CSS para realizar essa alteração
    const heroAux = new Hero("Exemplo");
    heroAux.startHero();
    this.hero = heroAux;
    this.createMonster();
  }

  //   backgroundBattleGeneretor() {}

  createMonster() {
    let monster = new Monster();
    monster.startMonster(this.hero.levelHero);
    this.setupMonsterInDisplay();
    //Esse método irá apenas criar o monstro quando solicitado e irá reatribuir o valor
    //do constructor (usaremos o constructor em funções no css para atribuir informações)
    //no html (nome), level e etc.
    // deve invocar a função setupMonsterInDisplay() que por sua vez vai colocar o monstro na tela
  }

  setupMonsterInDisplay() {
    // essa função irá configurar o background e o monstro novo no HTML
    document.getElementsByClassName("nameEnemy")[0].innerHTML =
      monster.nameMonster;
    document.getElementsByClassName("levelEnemy")[0].innerHTML =
      monster.levelMonster;
    document.getElementsByClassName("hpRealEnemy")[0].style.width = "99%";
  }
  //   statusCurrent() {
  //     // Depois de cada ataque, essa função será invocada para atualizar os status dos
  //     // personagens (monster e hero)
  // //   }
  //   deathConference() {
  //     // conferir se o personagem morreu ou se o monstro morreu, essa função será
  //     // invocada ao fim de cada ataque. if monstro morreu, invocar a criação de um novo
  //     // if personagem morreu, invocar defeat()
  //   }

  //   monsterAttack() {
  //     //
  // }

  heroAttack() {
    // full life monster - 99%
    // damage - x
    // damage * 99% / full life = %
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let heroDamagetoConvert = hero.baseDamageHero * randomMult;
    let heroDamageConvert = (heroDamagetoConvert * 99) / monster.hpMonster;
    let hpEnemyValue1 =
      document.getElementsByClassName("hpRealEnemy")[0].style.width;
    let hpEnemyValue2 = +hpEnemyValue1.slice(0, 2) - heroDamageConvert;
    document.getElementsByClassName(
      "hpRealEnemy"
    )[0].style.width = `${hpEnemyValue2}%`;
  }
}

// window.addEventListener("load", () => {
//   const attackBtn = document.getElementsByClassName("btn-attack")[0];
//   attackBtn.addEventListener("click", game.heroAttack);
// });

let game = new Gameboard();
// game.newGame;
