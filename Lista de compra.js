const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let lista = [];

function menu() {
    console.log("\n1 - Adicionar item");
    console.log("2 - Remover item");
    console.log("3 - Visualizar lista");
    console.log("4 - Sair");
    rl.question("Escolha uma opção: ", (op) => {
        if (op === '1') return rl.question("Item: ", (item) => { lista.push(item); menu(); });
        if (op === '2') return rl.question("Número do item: ", (i) => { lista.splice(i - 1, 1); menu(); });
        if (op === '3') return console.log("Lista:", lista), menu();
        if (op === '4') return rl.close();
        menu();
    });
}
menu();
