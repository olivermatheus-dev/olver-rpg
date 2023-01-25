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
    // this.hero = {};
    this.backgroundBattle = 0;
  }

  newGame() {
    // aqui vai entrar a função de gerar o boardGame, vou criar uma classe no CSS para realizar essa alteração
    // const heroAux = new Hero("Exemplo");
    // heroAux.startHero();
    // this.hero = heroAux;
    this.createMonster();
  }

  //   backgroundBattleGeneretor() {}

  createMonster() {
    monster.startMonster(hero.levelHero);
    console.log(monster);
    this.setupInDisplay();
    //Esse método irá apenas criar o monstro quando solicitado e irá reatribuir o valor
    //do constructor (usaremos o constructor em funções no css para atribuir informações)
    //no html (nome), level e etc.
    // deve invocar a função setupMonsterInDisplay() que por sua vez vai colocar o monstro na tela
  }

  setupInDisplay() {
    // essa função irá configurar o background e o monstro novo no HTML
    document.getElementsByClassName("nameEnemy")[0].innerHTML =
      monster.nameMonster;
    document.getElementsByClassName("levelEnemy")[0].innerHTML =
      monster.levelMonster;
    document.getElementsByClassName("hpRealEnemy")[0].style.width = "99%";
    document.getElementsByClassName("nameHero")[0].innerHTML = hero.nameHero;
    document.getElementsByClassName("levelHero")[0].innerHTML = hero.levelHero;
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

  monsterAction() {}

  heroAttack() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let heroDamagetoConvert = hero.baseDamageHero * randomMult;
    // console.log("Ataque do herói após multiplicador:" + heroDamagetoConvert);
    let heroDamageConvert = (+heroDamagetoConvert * 99) / monster.hpMonster;
    // console.log("Cálculo de porcentagem a ser tirado:" + heroDamageConvert);
    let hpEnemyCurrentValue =
      document.getElementsByClassName("hpRealEnemy")[0].style.width;
    let hpEnemyNewValue = +hpEnemyCurrentValue.slice(0, 2) - heroDamageConvert;
    // console.log(hpEnemyNewValue);
    document.getElementsByClassName(
      "hpRealEnemy"
    )[0].style.width = `${hpEnemyNewValue}%`;

    document.getElementsByClassName(
      "textBattleLog"
    )[0].innerHTML = `${hero.nameHero} tirou ${heroDamagetoConvert} de dano do inimigo`;
  }
}
const game = new Gameboard();
window.addEventListener("load", () => {
  const attackBtn = document.getElementsByClassName("btn-attack")[0];
  attackBtn.addEventListener("click", () => {
    game.heroAttack();
  });
});
