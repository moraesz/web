/* var nome = prompt("Jogador, qual seu nome?");
		if (nome === "") {
			nome = "Jogador";
		} else {
			document.getElementById("nome").innerHTML = nome;
		} */

var nome = "Vinícius";

var points1 = 0,
  points2 = 0;
function game(numero) {
  if (points1 + points2 == 15) {
    if (points1 > points2) {
      alert(nome + ", você venceu!\nParabéns pela vitória!");
    } else if (points2 > points1) {
      alert(
        nome +
          ", você perdeu.\nNão desanime, não foi dessa vez.\nJogue de novo!"
      );
    }
    points1 = 0;
    points2 = 0;
  }
  var player1 = playerMoves(numero);
  var player2 = gameMoves();
  var total = comparison(player1, player2);
  document.getElementById("score").innerHTML =
    nome + " " + points1 + " x " + points2 + " Computador";
  document.getElementById("play1").innerHTML = "Você jogou " + player1 + ".";
  document.getElementById("play2").innerHTML = "Console jogou " + player2 + ".";
  document.getElementById("round").innerHTML = "Você" + total;
}

function moves(escolha) {
  if (escolha == 1) {
    return "pedra";
  } else if (escolha == 2) {
    return "papel";
  } else if (escolha == 3) {
    return "tesoura";
  }
}

function gameMoves() {
  var valor = Math.floor(Math.random() * (4 - 1)) + 1;
  return moves(valor);
}

function playerMoves(opcao) {
  return moves(opcao);
}

function comparison(p1, p2) {
  var mensagem = "";
  if ((p1 == "pedra" && p2 == "papel") || (p1 == "papel" && p2 == "pedra")) {
    mensagem = "papel embrulha pedra.";
  } else if (
    (p1 == "papel" && p2 == "tesoura") ||
    (p1 == "tesoura" && p2 == "papel")
  ) {
    mensagem = "tesoura corta papel.";
  } else if (
    (p1 == "tesoura" && p2 == "pedra") ||
    (p1 == "pedra" && p2 == "tesoura")
  ) {
    mensagem = "pedra quebra tesoura.";
  } else if (p1 == p2) {
    mensagem = p1 + " é igual a " + p2 + ". Ninguém pontua.";
  }
  if (p1 == p2) {
    return "s empataram, " + mensagem;
  } else if (
    (p1 == "pedra" && p2 == "papel") ||
    (p1 == "papel" && p2 == "tesoura") ||
    (p1 == "tesoura" && p2 == "pedra")
  ) {
    points2++;
    return " perdeu, " + mensagem;
  } else if (
    (p1 == "pedra" && p2 == "tesoura") ||
    (p1 == "papel" && p2 == "pedra") ||
    (p1 == "tesoura" && p2 == "papel")
  ) {
    points1++;
    return " ganhou, " + mensagem;
  }
}
