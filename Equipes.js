const readline = require('readline-sync');

function calcularMedia(tarefas) {
    let soma = 0, pesos = 0;
    tarefas.forEach((nota, i) => {
        let peso = (i % 2 === 0) ? 2 : 1;
        soma += nota * peso;
        pesos += peso;
    });
    let media = soma / pesos;
    return media > 8 ? media + 2 : media;
}

function main() {
    let equipe = [];
    let numMembros = parseInt(readline.question("Quantos membros na equipe? (min 3): "));
    while (numMembros < 3 || isNaN(numMembros)) {
        numMembros = parseInt(readline.question("Digite um número válido (min 3): "));
    }

    for (let i = 0; i < numMembros; i++) {
        let nome = readline.question(`Nome do membro ${i + 1}: `);
        let tarefas = readline.question("Notas das tarefas //: ")
                              .split(" ").map(Number).slice(0, 10);
        equipe.push({ nome, media: calcularMedia(tarefas) });
    }

    equipe.forEach(m => console.log(`${m.nome}: Média ${m.media.toFixed(2)}`));
    let melhor = equipe.reduce((a, b) => (a.media > b.media ? a : b));
    let pior = equipe.reduce((a, b) => (a.media < b.media ? a : b));
    console.log(`\nMelhor desempenho: ${melhor.nome} (${melhor.media.toFixed(2)})`);
    console.log(`Pior desempenho: ${pior.nome} (${pior.media.toFixed(2)})`);
}

main();
// Para adicionar a nota, favor colocar a nota espaço e ,.
