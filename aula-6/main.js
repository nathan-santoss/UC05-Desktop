import promptSync from 'prompt-sync'
import { criarConta, menuCliente } from './function.js';
const prompt = promptSync()

let flag = true

const clientes = []
for(let i = 0; i < 2; i++){
    let clientecriado = null
    while(!clientecriado){
        try {
            clientecriado = criarConta()
        } catch (error) {
            console.error(error.message) // usuario irá ficar preso aqui em caso de erro na criação
        }
    }
    clientes.push(clientecriado)
    console.clear()
}

while(flag){
    console.log('Selecione um dos clientes abaixo:         (aperte 0 para sair)');
    clientes.forEach((cliente, i) => {
        console.log(`[${i+1}] - ${cliente.nome}`);
    });
    const op = Number(prompt('--> '))
    console.clear()
    switch(op){
        case 1:
            menuCliente(clientes[0])
            break
        case 2:
            menuCliente(clientes[1])
            break
        case 0:
            flag = false
            break
        default:
            console.log('Selecione APENAS um dos clientes disponíveis!');
            break
    }
}