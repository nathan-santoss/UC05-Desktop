import { Cliente } from "../classes/Cliente.js"

const criarCliente = () =>{
    const nome = prompt('Informe seu nome: ').toUpperCase()
    const cpf = prompt('CPF: ')
    console.log('Número para contato.');
    const contato = prompt('Digite apenas números: ')
    const novoCliente = new Cliente(nome, cpf, contato)
    return novoCliente
}

export const criarReserva = () => {
    const cliente = criarCliente()
    
}