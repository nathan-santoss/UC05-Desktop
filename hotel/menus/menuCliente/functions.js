import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Cliente } from "../../class/Cliente.js"

export const criarCliente = (hotel) => {
    const nome = prompt('Nome: ')
    const cpf = prompt('CPF: ')
    const contato = prompt('Telefone/Celular: ')
    let novoCliente = new Cliente(nome, cpf, contato)
    let existe = checarExistenciaCliente(hotel, novoCliente)
    if(existe){
        console.log('O cliente já existe no sistema.');
        return existe}
    else{ 
        hotel.clientes.push(novoCliente)
        console.log('Cliente inserido no sistema!');
        return novoCliente}
}

export const checarExistenciaCliente = (hotel, novoCadastro) => {
    const clienteExiste = hotel.clientes.find(cliente => cliente.nome === novoCadastro.nome)
    if(clienteExiste === undefined || clienteExiste === false){return false}
    else{
        return clienteExiste
    }
}