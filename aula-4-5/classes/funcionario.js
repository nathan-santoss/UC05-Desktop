import { Pessoa } from "./Pessoa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Funcionario extends Pessoa{
    #salario
    #matricula
    constructor(nome, cpf, nascimento, salario, matricula){
        super(nome, cpf, nascimento)
        this.#salario = salario
        this.#matricula = matricula
        this.valorHora
        this.horasExtras = 0
        this.desconto = 0
        this.liquido = 0
        this.inss = 0
    }
    get salario(){return this.#salario}
    set salario(valor){
        if(valor > 0 && valor !== this.salario && !isNaN(Number(valor))){
            this.#salario = valor
            console.log('Salário alterado com sucesso!')
        }
        else{console.log('Salário inválido!')}
    }
    get matricula(){return this.#matricula}
    set matricula(valor){if(valor >= 0){this.#matricula = valor}}


    calculoDeHoras(){
        this.horasExtras = Number(prompt('Informe o número de horas extras: '))   
        this.valorHora = 20  
    }
    calcularSalario(){
        if(this.horasExtras > 0){
            this.inss = 9/100
            let bruto = this.salario + (this.horasExtras*this.valorHora)
            this.desconto = bruto * this.inss
            this.liquido = bruto - this.desconto

        }
        else if(this.horasExtras = 0){
            this.inss = 7.5/100
            let bruto = this.salario + (this.horasExtras*this.valorHora)
            this.desconto = bruto * this.inss
            this.liquido = bruto - this.desconto
        }
    }
    gerarContraCheque(){
        console.log(`
            [CONTRA-CHEQUE]
            Salário Base -> R$${this.salario.toFixed(2)}
            Horas extras -> R$${this.horasExtras * this.valorHora} (${this.horasExtras} horas)
            Bruto -> R$${(this.horasExtras*this.valorHora)+ (this.salario)}
            Desconto -> R$${this.desconto.toFixed(2)}
            Liquido a receber -> R$${this.liquido.toFixed(2)}`); 
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Salário -> R$${this.salario}
            Matricula -> ${this.matricula}`);
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