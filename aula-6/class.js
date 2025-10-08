import {gerarConta} from "./function.js"
export class Conta{
    #nome
    #saldo
    constructor(nome){
        this.nome = nome
        this.#saldo = 0
        this.agencia = '0001'
        this.conta = gerarConta()
    }
    get nome(){ return this.#nome}
    get saldo(){return this.#saldo}

    set nome(texto){
        if(!isNaN(Number(texto))){
            throw new ErroMessage('Erro: Não é aceito números.')
        }
        this.#nome = texto.toUpperCase()
    }
    set saldo(valor){
        if(valor <= 0){
            throw new ErroMessage('Erro: Digite um valor maior que 0!')
        }
        if(isNaN(Number(valor))){
            throw new ErroMessage('Erro: Digite apenas números!')
        }
        this.#saldo = Number(valor.toFixed(2))
    }
    sacar(valor){
        if(valor <= 0){
            throw new ErroMessage('Erro: Digite um valor maior que 0!')
        }
        if(isNaN(Number(valor))){
            throw new ErroMessage('Erro: Digite apenas números!')
        }
        else if(this.saldo < valor){
            throw new ErroMessage('Erro: Saldo insuficiente!')
        }
        this.saldo -= valor
        console.log('Saque efetuado com sucesso!');
    }
    depositar(valor){
        if(valor <= 0){
            throw new ErroMessage('Erro: Digite um valor maior que 0!')
        }
        if(isNaN(Number(valor))){
            throw new ErroMessage('Erro: Digite apenas números!')
        }
        this.saldo += valor
        console.log('Deposito efetuado com sucesso!');
    }
    calcularRendimento(){
        if(this.saldo === 0){
            throw new ErroMessage('Erro: Você não possui saldo!')
        }
        const rendimento = this.saldo * 10/100
        console.log(`O seu saldo é de R$${this.saldo.toFixed(2)} e rende R$${rendimento.toFixed(2)} a.m`);
    }
    imprimirInfo(){
        console.log(`
            [======= ${this.nome} =======]
            Agencia -> ${this.agencia}
            Conta -> ${this.conta}
            Saldo -> R$${this.saldo.toFixed(2)}`);
    }
}

export class ErroMessage extends Error{
    constructor(mensagem){
        super(mensagem)
    }
}