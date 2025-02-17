const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o preço do produto: ", (preco) => {
    rl.question("O produto tem direito a desconto? (s/n): ", (resposta) => {
        let temDesconto = resposta.trim().toLowerCase() === 's';
        calcularImposto(parseFloat(preco), temDesconto);
        rl.close();
    });
});

function calcularImposto(preco, temDesconto) {
    let desconto = temDesconto ? 0.10 : 0.0;
    let precoComDesconto = preco * (1 - desconto);
    let icms = Math.random() * (25 - 12) + 12;
    let precoFinal = precoComDesconto * (1 + icms / 100);

    console.log(`Preço original: R$ ${preco.toFixed(2)}`);
    console.log(`Teve desconto? ${temDesconto ? 'Sim' : 'Não'}`);
    console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
    console.log(`ICMS aplicado: ${icms.toFixed(2)}%`);
    console.log(`Preço final com imposto: R$ ${precoFinal.toFixed(2)}`);
}
