import { Funcionario } from "./funcionario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Gerente extends Funcionario{
    constructor(nome, cpf, nascimento, salario, matricula, setor, qtde_team){
        super(nome, cpf, nascimento, salario, matricula)
        this.setor = setor
        this.qtde_team = qtde_team
    }
    calculoBonificacao(){
        const bonusMaior10 = 15/100
        const bonusMenor10 = 7/100
        let bonus
        if(this.qtde_team >= 10){
            bonus = this.salario + (this.salario * bonusMaior10)
        }
        else{
            bonus = this.salario + (this.salario * bonusMenor10)
        }
        return bonus
    }
}
export const criarGerente = () => {
    let nome = prompt('Digite o nome -> ')
    let cpf = Number(prompt('CPF -> '))
    let nasc = prompt('Data de Nascimento -> ')
    let matricula = Number(prompt('Matricula ->'))
    let salario = Number(prompt('Salário -> '))
    let setor = prompt('Setor responsável -> ')
    let qtde = Number(prompt('Quantos funcionários sob a gestão? '))
    const novoGerente = new Gerente(nome, cpf, nasc, salario, matricula, setor, qtde)
    return novoGerente
}