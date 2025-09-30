import { Pessoa } from "./Pessoa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Dono extends Pessoa{
    #patrimonio
    #participacaoAcionaria
    constructor(nome, cpf, nascicimento, patrimonio, participacaoAcionaria){
        super(nome, cpf, nascicimento)
        this.#patrimonio = patrimonio
        this.#participacaoAcionaria = toString(participacaoAcionaria)
    }
    get patrimonio(){ this.#patrimonio}
    get participacaoAcionaria(){return this.#participacaoAcionaria}
    set patrimonio(valor){
        if(!isNaN(Number(valor)) && valor > 0){
            this.#patrimonio = valor.toFixed(2)
        }
        else{console.log('Valor inválido!')}
    }
    set participacaoAcionaria(valor){
        if(valor >= 0){
            this.#participacaoAcionaria = valor
        }
        else{console.log('Valor inválido!')}
    }
    investir(valor){
        if(valor >= 0 && !isNaN(Number(valor))){
            this.#patrimonio += valor
            console.log('Investimento aplicado com sucesso!')
        }
        else{console.log('Valor inválido!');}
    }
    retirarLucro(valor){
        if(valor >= 0 && !isNaN(Number(valor))){
            this.#patrimonio -= valor
            console.log('Investimento retirado com sucesso!')
        }
        else{console.log('Valor inválido!');}
    }
}
export const criarDono = () => {
    let nome = prompt('Digite o nome -> ')
    let cpf = Number(prompt('CPF -> '))
    let nasc = prompt('Data de Nascimento -> ')
    let patrimonio_atual = Number(prompt('Patrimonio -> '))
    let participacao = Number(prompt('Qual a porcentagem dos lucros? (%) -> '))
    const novoDono = new Dono(nome, cpf, nasc, patrimonio_atual, participacao)
    return novoDono 
}