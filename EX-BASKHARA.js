//ex Formula de Bhaskara. 
// - Formula de Bhaskara é;
// ax² + bx + c = 0




const prompt = require('prompt-sync')();


let nome = prompt("Digite seu nome: ");
console.log("Olá " + nome + "!");


// após declarar os valores acima, execute no terminal; node + nome do arquivo.js



// Declaração de variáveis
// Declaração dos coeficientes com let


let a = Number(prompt("Dado na equação ax² + bx + c = 0, digite o valor de a: "));
let b = Number(prompt("Dado na equação ax² + bx + c = 0, digite o valor de b: "));
let c = Number(prompt("Dado na equação ax² + bx + c = 0, digite o valor de c: "));

// Função para calcular o delta
const delta = (a, b, c) => (b ** 2) - (4 * a * c);

// Função para calcular as raízes usando Bhaskara
function bhaskara(a, b, c) {
    const valorDelta = delta(a, b, c);

    if (valorDelta < 0) {
        console.log("A equação não possui raízes reais.");
    } else if (valorDelta > 0) {
        const x1 = (-b + Math.sqrt(valorDelta)) / (2 * a);
        const x2 = (-b - Math.sqrt(valorDelta)) / (2 * a);
        console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
    } else {
        const x = -b / (2 * a);
        console.log(`A raiz da equação é: x = ${x}`);
    }
}

// Chamada da funçã o Bhaskara
bhaskara(a, b, c);
