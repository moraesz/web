let placar = 0;
let jogador = document.querySelectorAll('button');
let computador = Math.floor(Math.random() * 3) + 1;

console.log(jogador);
console.log(computador);

jogador.addEventListener('click', function () {
  console.log('Clicou no ', jogador.innerText);
});
