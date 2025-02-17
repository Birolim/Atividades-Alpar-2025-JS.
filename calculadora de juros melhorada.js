const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o preço do produto: ", (preco) => {
    rl.question("O produto tem direito a desconto? (s/n): ", (respostaDesconto) => {
        rl.question("Digite o cupom de desconto (se houver): ", (cupom) => {
            rl.question("Digite seu estado (sigla): ", (estado) => {
                let temDesconto = respostaDesconto.trim().toLowerCase() === 's';
                let descontoCupom = cupom.trim().toUpperCase() === 'PROMO15';
                
                calcularImposto(parseFloat(preco), temDesconto, descontoCupom, estado.trim().toUpperCase());
                rl.close();
            });
        }); 
    });
});

function calcularImposto(preco, temDesconto, descontoCupom, estado) {
    let desconto = 0;
    if (descontoCupom) {
        desconto = 0.15;
    } else if (temDesconto) {
        desconto = 0.10;
    }
    
    let precoComDesconto = preco * (1 - desconto);
    let icms = Math.random() * (25 - 12) + 12;
    let precoFinal = precoComDesconto * (1 + icms / 100);
    
    let frete = 30;
    if (estado === 'SP') frete = 10;
    else if (estado === 'RJ') frete = 20;
    
    let totalCompra = precoFinal + frete;

    console.log(`Preço original: R$ ${preco.toFixed(2)}`);
    console.log(`Teve desconto? ${temDesconto ? 'Sim' : 'Não'}`);
    console.log(`Cupom aplicado? ${descontoCupom ? 'Sim' : 'Não'}`);
    console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
    console.log(`ICMS aplicado: ${icms.toFixed(2)}%`);
    console.log(`Preço final com imposto: R$ ${precoFinal.toFixed(2)}`);
    console.log(`Frete para ${estado}: R$ ${frete.toFixed(2)}`);
    console.log(`Total da compra: R$ ${totalCompra.toFixed(2)}`);
}
