const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let usuarios = [];

function menu() {
    console.log("\n1 - Adicionar usuário");
    console.log("2 - Remover usuário pelo email");
    console.log("3 - Listar usuários");
    console.log("4 - Sair");
    rl.question("Escolha uma opção: ", (op) => {
        if (op === '1') return adicionarUsuario();
        if (op === '2') return removerUsuario();
        if (op === '3') return listarUsuarios();
        if (op === '4') return rl.close();
        console.log("Opção inválida.");
        menu();
    });
}

function adicionarUsuario() {
    rl.question("Nome: ", (nome) => {
        rl.question("Idade: ", (idade) => {
            rl.question("Email: ", (email) => {
                if (usuarios.some(u => u.email === email)) {
                    console.log("Este email já está cadastrado.");
                } else {
                    usuarios.push({ nome, idade, email });
                    console.log("Usuário adicionado com sucesso!");
                }
                menu();
            });
        });
    });
}

function removerUsuario() {
    rl.question("Digite o email do usuário a ser removido: ", (email) => {
        let index = usuarios.findIndex(u => u.email === email);
        if (index !== -1) {
            usuarios.splice(index, 1);
            console.log("Usuário removido com sucesso!");
        } else {
            console.log("Email não encontrado.");
        }
        menu();
    });
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("\nLista de Usuários:");
        usuarios.forEach((u, i) => console.log(`${i + 1}. Nome: ${u.nome}, Idade: ${u.idade}, Email: ${u.email}`));
    }
    menu();
}

menu();
