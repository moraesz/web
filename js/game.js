export default function rodarJogo() {
  const jogador = document.querySelector('.jogador');
  const computador = document.querySelector('.computador');
  const botoes = document.querySelectorAll('button');
  const resultado = document.querySelector('.resultado');
  const pontosJogador = document.querySelector('.pontos-jogador');
  const pontosComputador = document.querySelector('.pontos-computador');
  const opcoesJogadas = ['pedra', 'papel', 'tesoura'];

  function jogadaJogador() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        jogador.innerHTML = botao.getAttribute('class');
      });
    });
  }

  function jogadaComputador() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        const x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        computador.innerHTML = opcoesJogadas[x - 1];
      });
    });
  }

  let j = '';
  let c = '';
  function validarJogadas() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        j = jogador.innerHTML;
        c = computador.innerHTML;
      });
    });
  }

  function compararJogadas() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        let res = '';
        if (j === c) {
          res = 'empate';
        } else if (
          (j === 'pedra' && c === 'tesoura') ||
          (j === 'papel' && c === 'pedra') ||
          (j === 'tesoura' && c === 'papel')
        ) {
          res = 'jogador venceu';
        } else if (
          (c === 'pedra' && j === 'tesoura') ||
          (c === 'papel' && j === 'pedra') ||
          (c === 'tesoura' && j === 'papel')
        ) {
          res = 'computador venceu';
        }
        resultado.innerHTML = res;
      });
    });
  }

  let pJogador = 0;
  let pComputador = 0;
  function contadorPontos() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        if (
          +pontosJogador.innerHTML === 7 ||
          +pontosComputador.innerHTML === 7
        ) {
          pontosJogador.innerHTML = 0;
          pontosComputador.innerHTML = 0;
        }
        if (resultado.innerHTML === 'jogador venceu') {
          pJogador += 1;
        } else if (resultado.innerHTML === 'computador venceu') {
          pComputador += 1;
        }
        pontosJogador.innerHTML = pJogador;
        pontosComputador.innerHTML = pComputador;
      });
    });
  }

  function fimJogo() {
    botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        if (
          +pontosJogador.innerHTML === 7 ||
          +pontosComputador.innerHTML === 7
        ) {
          pJogador = 0;
          pComputador = 0;
          let mensagemFinal = 'Fim de jogo!';
          if (+pontosJogador.innerHTML === 7) {
            pontosJogador.innerHTML = 7;
            alert((mensagemFinal += '\nJogador é o vencedor!!'));
          } else if (+pontosComputador.innerHTML === 7) {
            pontosComputador.innerHTML = 7;
            alert((mensagemFinal += '\nComputador é o vencedor!!'));
          }
        }
      });
    });
  }

  jogadaJogador();
  jogadaComputador();
  validarJogadas();
  compararJogadas();
  contadorPontos();
  fimJogo();
}
