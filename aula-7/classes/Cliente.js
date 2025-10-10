import { Erros } from "./erros.js"

export class Cliente{
    #cpf
    #contato
    constructor(nome, cpf, contato){
        this.nome = nome
        this.cpf = cpf
        this.contato = contato
    }
    get cpf(){return this.#cpf}
    get contato(){return this.#contato}

    set cpf(valor){
       if(isNaN(Number(valor))){
        throw new Erros('Erro: Digite apenas números!')
       }
       if(valor.length !== 11){
        throw new Erros('Erro: É necessário o CPF possuir 11 dígitos')
       }
       this.#cpf = Number(valor)
    }
    set contato(numero){
        if(isNaN(Number(numero))){
            throw new Erros('Erro: Digite SOMENTE números!')
        }
        if(numero.length !== 11){
            throw new Erros('Erro: Digite os 11 dígitos do seu número!')
        }
        this.#contato = Number(numero)
    }
}