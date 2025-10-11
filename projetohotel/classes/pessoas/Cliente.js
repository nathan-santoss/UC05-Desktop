import { Pessoa } from "./Pessoa.js"
import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Cliente extends Pessoa{
    #contato
    constructor(nome, cpf, hierquia, contato) {
        super(nome, cpf, hierquia)
        this.contato = contato
    }
    get contato(){return this.#contato}
    set contato(num){
        if(num.length !== 11){ throw new Error('O número deve conter 11 dígitos!')}
        if(/[a-zA-Z]/.test(num)){ throw new Error('O contato deve conter APENAS números')}
        this.#contato = Number(num)
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Contato -> ${this.contato}`);
    }
}

export const criarCliente = () => {
    const nome = prompt('Digite o nome: ')
    const cpf = prompt('CPF: ')
    const hierquia = 'CLIENTE'
    const numero = prompt('Telefone: ')
    const novoCliente = new Cliente(nome, cpf, hierquia, numero)
    return novoCliente
}