function jogarDado() {
    return Math.floor(Math.random() * 6) + 1; // Gera um número de 1 a 6
}

let pontos = 100;
let rodada = 1;

while (rodada <= 20) {
    let dado = jogarDado();
    let mensagem = `Rodada ${rodada}: Dado rolado -> ${dado}`;

    // Regra 1: Se o resultado do dado for ímpar, o jogador recebe 10 pontos
    if (dado % 2 !== 0) {
        pontos += 10;
        mensagem += " | Ganhou 10 pontos";
    }
    // Regra 2: Se o resultado do dado for par, o jogador perde 5 pontos
    else {
        pontos -= 5;
        mensagem += " | Perdeu 5 pontos";
    }

    // Regra 3: Se a rodada for múltipla de 3, o jogador ganha 15 pontos
    if (rodada % 3 === 0) {
        pontos += 15;
        mensagem += " | Ganhou 15 pontos (Rodada múltipla de 3)";
    }
    // Regra 4: Se a rodada for múltipla de 4, o jogador perde 20 pontos
    if (rodada % 4 === 0) {
        pontos -= 20;
        mensagem += " | Perdeu 20 pontos (Rodada múltipla de 4)";
    }

    // Regra 5: Se a pontuação do jogador estiver negativa, ele perde o dobro de pontos
    if (pontos < 0) {
        pontos *= 2;
        mensagem += " | Pontuação negativa! Perdeu o dobro de pontos";
    }

    console.log(mensagem + ` | Pontuação atual: ${pontos}`);

    rodada++;
}

console.log("Jogo finalizado!");
console.log(pontos >= 50 ? "Parabéns! Você venceu o jogo!" : "Que pena! Você perdeu o jogo.");
