// função abaixo para ajustar o width de qualquer barra
function widthStatus(statusAtual, statusMax, classElement) {
  // essa function só tem o objetivo de atualizar a % do width elemento fornecido a ele
  let percentualDaVida = (statusAtual * 100) / statusMax;
  document.getElementsByClassName(
    classElement
  )[0].style.width = `${percentualDaVida}%`;
}

// função para adicionar e retirar classes dos elementos html
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

//função abaixo desabilita todos os botões configurados
function desabilitarAllBtn() {
  // Para atualizar novos botões aqui, basta adicionar seguindo a mesma lógica abaixo
  // tudo que deve ser trocado aqui abaixo

  //Ataque abaixo
  document
    .getElementsByClassName(`eventListenerAttack`)[0]
    .classList.add(`hidden`);
  document.getElementsByClassName(`btn-attack`)[1].classList.remove(`hidden`);
  // hpRecovery/poção abaixo
  document
    .getElementsByClassName(`eventListenerHpRecovery`)[0]
    .classList.add(`hidden`);
  document
    .getElementsByClassName(`btn-hpRecovery`)[1]
    .classList.remove(`hidden`);
  // tudo que deve destrocar aqui dentro do setTimeout()

  setTimeout(() => {
    // ataque abaixo
    document
      .getElementsByClassName(`eventListenerAttack`)[0]
      .classList.remove(`hidden`);
    document.getElementsByClassName(`btn-attack`)[1].classList.add(`hidden`);
    //  hpRecovery/poção abaixo
    document
      .getElementsByClassName(`eventListenerHpRecovery`)[0]
      .classList.remove(`hidden`);
    document
      .getElementsByClassName(`btn-hpRecovery`)[1]
      .classList.add(`hidden`);
  }, 2000);
}
