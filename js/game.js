// Função Attack para ser adaptada

import { Monster } from "./monsters";

function attack() {
  let hpEnemyValue =
    document.getElementsByClassName("hpRealEnemy")[0].style.width;
  if (!hpEnemyValue) {
    hpEnemyValue = "99%";
  }
  let hpEnemyValueNumber = +hpEnemyValue.slice(0, 2);
  let attackHero = 10;
  hpEnemyValueNumber -= attackHero;
  hpEnemyValue = `${hpEnemyValueNumber}%`;
  console.log(hpEnemyValue);
  document.getElementsByClassName("hpRealEnemy")[0].style.width = hpEnemyValue;
  return;
}

window.addEventListener("load", () => {
  const attackBtn = document.getElementsByClassName("btn-attack")[0];
  attackBtn.addEventListener("click", attack);
});

// Jogo abaixo

// Fazer dos demais arquivos JS necessários: monster.js , hero.js , imagens.js

class Gameboard {
  constructor() {
    this.xpAcumulado = 0;
    this.finalLevelHero = 0;
    this.quantityMonsterDefeat = 0;
    this.currentMonster = {};
    this.heroStatus = {};
    this.backgroundBattle = 0;
  }

  newGame() {
    // aqui vai entrar a função de gerar o boardGame, vou criar uma classe no CSS para realizar essa alteração
  }

  backgroundBattleGeneretor() {}

  createMonster() {
    let monster = new Monster();
    //Esse método irá apenas criar o monstro quando solicitado e irá reatribuir o valor
    //do constructor (usaremos o constructor em funções no css para atribuir informações)
    //no html (nome), level e etc.
    // deve invocar a função setupMonsterInDisplay() que por sua vez vai colocar o monstro na tela
  }

  setupMonsterInDisplay() {
    // essa função irá configurar o background e o monstro novo no HTML
  }

  statusCurrent() {
    // Depois de cada ataque, essa função será invocada para atualizar os status dos
    // personagens (monster e hero)
  }
  deathConference() {
    // conferir se o personagem morreu ou se o monstro morreu, essa função será
    // invocada ao fim de cada ataque. if monstro morreu, invocar a criação de um novo
    // if personagem morreu, invocar defeat()
  }

  monsterAttack() {}

  heroAttack() {}
}
