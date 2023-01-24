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

// class Character(name){
//     constructor{
//         this.name = name
//         this.hp = 100
//         this.xp = 0

//     }

// attack()

// }
