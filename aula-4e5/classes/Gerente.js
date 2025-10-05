import { Funcionario } from "./Funcionario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Gerente extends Funcionario{
    constructor(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia, setor, qtde){
        super(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia)
        this.setor = setor
        this.qtde_equipe = parseInt(qtde)
    }
    gerarContraCheque(){
        super.gerarContraCheque()
        console.log(`\n
            Valor da bonificação = R$${this.bonus}`);
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Setor -> ${this.setor}
            Tamanho do time -> ${this.qtde_equipe} pessoa's`);
    }
}

export const criarGerente = () => {
    //nome,cpf,nascimento, cargo, salario, matricula, horas, hierarquia, setor, qtde
    const nome = prompt('Informe o nome do Gerente: ')
    const cpf = prompt('CPF: ')
    const nascimento = prompt('Data de nascimento: ')
    const salario = Number(prompt('Salário contratual: '))
    const matricula = Number(prompt('Matrícula: '))
    const valorHora = 20 // predefinido
    const hierarquia = 'GERENTE' // predefinido
    const setor = prompt('Qual o setor da atual gerencia? ')
    const cargo = `Gerente`
    const qtde = Number(prompt('Quantidade de pessoas sob gestão: '))
    const novoGerente = new Gerente(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia, setor, qtde)
    return novoGerente
}