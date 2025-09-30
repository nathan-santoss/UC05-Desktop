import { Pessoa } from "./Pessoa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Funcionario extends Pessoa{
    #salario
    #matricula
    constructor(nome, cpf, nascimento, salario, matricula){
        super(nome, cpf, nascimento)
        this.#salario = 'R$' + salario.toFixed(2)
        this.#matricula = matricula
    }
    get salario(){return this.#matricula}
    set salario(valor){
        if(valor > 0 && valor !== this.salario && !isNaN(Number(valor))){
            this.#salario = valor.toFixed(2)
            console.log('Salário alterado com sucesso!')
        }
        else{console.log('Salário inválido!')}
    }
    calculoDeHoras(horas){
        const valor_hora = 15.00
        const receber = valor_hora * horas
        return receber.toFixed(2)
    }
}
export const criarFuncionario = () => {
    let nome = prompt('Digite o nome -> ')
    let cpf = Number(prompt('CPF -> '))
    let nasc = prompt('Data de Nascimento -> ')
    let matricula = Number(prompt('Matricula ->'))
    let salario = Number(prompt('Salário -> '))
    const novoFunc = new Funcionario(nome, cpf, nasc, salario, matricula)
    return novoFunc
}