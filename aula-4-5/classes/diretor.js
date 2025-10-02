import { Funcionario } from "./funcionario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Diretor extends Funcionario{
    #pll
    constructor(nome, cpf, nascimento, salario, matricula, departamento, tempoDireccao){
        super(nome, cpf, nascimento, salario, matricula)
        this.#pll = 'NÃO DEFINIDO'
        this.departamento = departamento
        this.tempoDireccao = tempoDireccao
    }
    get pll(){return this.#pll}
    set pll(valor){
        if(valor >= 0){
            this.#pll = valor
        }
    }
    calcularGratificacao(){
        const bonus5anos = 30/100
        const bonus2anos = 20/100
        let total
        let habilitado = false
        console.log(`
            Diretor está habilitado a receber?
            [1] SIM
            [2] NÃO`)
        const op = Number(prompt('--> '))
        switch(op){
            case 1:
                if(this.tempoDireccao >= 5){
                    this.#pll = this.salario + (this.salario * bonus5anos)
                }
                else{this.#pll = this.salario + (this.salario * bonus2anos)}
                break
            case 2:
                this.#pll = this.salario + (this.salario * 15/100)
                break
            default:
                console.log('Opção inválida!')
                break
        }
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Departamento -> ${this.departamento}
            Tempo de Direção -> ${this.tempoDireccao} anos`);
    }
}

export const criarDiretor = () => {
    let nome = prompt('Digite o nome -> ')
    let cpf = Number(prompt('CPF -> '))
    let nasc = prompt('Data de Nascimento -> ')
    let matricula = Number(prompt('Matricula ->'))
    let salario = Number(prompt('Salário -> '))
    let departamento = prompt('Departamento responsável -> ')
    let tempoDirigindo = Number(prompt('Tempo sob o comando do setor -> '))
    const novoDiretor = new Diretor(nome, cpf, nasc, salario, matricula, departamento, tempoDirigindo)
    return novoDiretor
}