# RPG Adventure

O jogo RPG Adventure foi desenvolvido com o objetivo de gerar entretenimento para as mais diversas idades, composto por uma série de batalhas com monstros únicos o jogo te desafia a conseguir chegar ao nível mais alto possível.

**Para jogar, acesse:** [Rpg Adventure](https://olivermnoo.github.io/rpg-adventure/)
**Para ver uma apresentação em slides do projeto:** [Slides da Apresentação](https://www.canva.com/design/DAFYzO2Mt2M/fsVmNyuY94l1ewCsrFA1nA/view?utm_content=DAFYzO2Mt2M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Como jogar:

O jogo conta com uma jogabilidade simples, precisando apenas escolher seu nome na tela inicial e depois você já é apresentado ao seu primeiro desafio. O jogo é composto por turnos, você deve escolher uma ação e depois aguardar o monstro executar sua ação.

## Sistema de Monstros:

- **Sistema randômico de classes**
- **Sistema randômico de nome baseado na classe do monstro**
- **Sistema randômico de geração de imagens para os monstros baseados em sua classe**

Os monstros são criados a partir de diversas funções que randomizam desde a classe, o nome com base na classe e a imagem com base na classe.

O nível do monstro é gerado a partir do nível do personagem, no inicio do game você encontrará monstros do seu nível, porém ao alcançar níveis mais altos os monstros passam a ser gerados com níveis diferentes do seu. Você pode dar a sorte de pegar um monstro com nível menor que o seu ou dar o azar de pegar um monstro com alguns níveis acima.

| Nível do Personagem | Nível dos Monstros                                                 |
| ------------------- | ------------------------------------------------------------------ |
| Menor que 10        | Mesmo nível do personagem                                          |
| Maior que 10        | Aleatório com um range de - 3 a + 3 baseado no nível do personagem |

## Status dos Monstros

- **Status gerados com base no nível do monstro**
- **Status com multiplicadores randômicos**

Os status do monstro são gerados com base em seu nível, quanto maior o nível, maior o ataque base do monstro porém não acaba por ai. Antes dos status serem atribuídos ao monstro efetivamente eles passam por um sistema de multiplicadores randômicos que podem aumentar ou diminuir a vida, o ataque e até mesmo o valor do XP desse monstro.

**Passos para a criação dos status dos monstros:**

1.  Gerado um status base com base do nível do monstro (nesta parte os monstros com mesmos níveis teriam os mesmos status.
2.  Antes de atribuir os status ao monstro, cada status passa por um multiplicador randômico que pode desde diminuir a vida, o ataque e o valor de XP do monstro até aumentar sua vida.
3.  Ao final o status do monstro é atribuído a ele

**Confira os possíveis multiplicadores para cada status abaixo:**

| Status      | Multiplicadores                                |
| ----------- | ---------------------------------------------- |
| HP Máximo   | Indo de 0,8x da Calculada Previamente até 1,2x |
| Ataque Base | Indo de 0,8x da Calculada Previamente até 1,2x |
| Valor de XP | Indo de 0,8x da Calculada Previamente até 1,6x |

Dessa forma os monstros gerados além de nomes, imagens e classes diferentes, possuem uma combinação de status diferentes. Na versão 1.1 liberada na data 27/01 as combinações de status diferentes estão em 225 possibilidades.

## Sistema de Combate

- **Sistema de ataque duplo**
- **Modificador de ataque base**

**Modificador de ataque base** : toda vez que o personagem ou o monstro vai atacar, o ataque base dele passa por multiplicadores podendo gerar assim ataques mais fracos ou mais fortes e até mesmo possuem uma pequena chance de **dano crítico**.

- **Sistema de ataque duplo**: os monstros por sua vez em alguns rounds podem executar 2 ataques ao mesmo tempo, tornando o desafio de derrota-lo ainda mais difícil.

| Personagem | Multiplicadores Base                 |
| ---------- | ------------------------------------ |
| Herói      | Indo de 0,8x até 1,6x do Ataque Base |
| Monstro    | Indo de 0,7x até 1,6x do Ataque Base |

Crítico: Os monstros possuem uma chance de de menos de 7% de acerto de crítico. ( Crítico de 3x do ataque base). Enquanto o herói possuí cerca de 8% de chance de acerto crítico. ( Crítico de 3x do ataque base)

## Sistema de Pontuação

Ao morrer o jogador tem acesso a pontuação obtida nessa jogatina, essa pontuação é calculada com base em 3 variáveis:

- Nível alcançado pelo Herói
- Quantidade de Monstros derrotados
- XP total acumulado durante a jogatina

## Tecnologias Utilizadas no Projeto

Para esse projeto foram utilizadas apenas JavaScript, HTML e CSS. Nenhum framework foi utilizado na criação do projeto.

## Design e ilustrações

O design tanto do herói e dos monstros quanto dos backgrounds foram retirados do site [Canva](https://www.canva.com/pt_br/) e alguns foram editados e retrabalhados no [Firma](https://www.figma.com/)
