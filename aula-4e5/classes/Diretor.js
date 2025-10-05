import { Funcionario } from "./Funcionario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Diretor extends Funcionario{
    constructor(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia, departamento){
        super(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia)
        this.departamento = departamento
        this.apto = false
        this.tempoGestao = 0
    }
    gerarContraCheque(){
        super.gerarContraCheque()
        console.log(`Valor da Gratificação = R$${this.bonus}`);
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Valor da participação dos lucros = R$${this.bonus}
            Tempo de gestão: ${this.tempoGestao} ano's
            Departamento: ${this.departamento}`);
    }
}

export const criarDiretor = () => {
//nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia, departamento
    const nome = prompt('Nome do Diretor: ').toUpperCase()
    const cpf = prompt('CPF: ')
    const nascimento = prompt('Data de nascimento: ')
    const cargo = 'DIRETOR'
    const valorHora = 25
    const hierarquia = 'DIRETOR'
    const salario = Number(prompt('Salário contrátual: '))
    const matricula = Number(prompt('Matricula: '))
    const departamento = prompt('Departamento responsável: ').toUpperCase()
    const novoDiretor = new Diretor(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia, departamento)
    return novoDiretor
}
