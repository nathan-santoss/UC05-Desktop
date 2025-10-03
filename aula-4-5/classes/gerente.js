import { Funcionario } from "./funcionario.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Gerente extends Funcionario{
    constructor(nome, cpf, nascimento, salario, matricula, setor, qtde_team){
        super(nome, cpf, nascimento, salario, matricula)
        this.setor = setor
        this.qtde_team = qtde_team
        this.bonus
    }
    calculoBonificacao(){
        const bonusMaior10 = 15/100
        const bonusMenor10 = 7/100
        if(this.qtde_team >= 10){
            this.bonus = this.salario * bonusMaior10
        }
        else{
            this.bonus = this.salario * bonusMenor10
        } 
    }
    calcularSalario(){
        let bruto = this.salario + this.bonus + (this.horasExtras*this.valorHora) 
        if(this.horasExtras > 0){
            this.inss = 12/100
            this.desconto = bruto * this.inss
            this.liquido = bruto - this.desconto
        }
        else if(this.horasExtras = 0){
            this.inss = 9/100
            this.desconto = bruto * this.inss
            this.liquido = bruto - this.desconto
        }
    }
    gerarContraCheque(){
        super.gerarContraCheque()
        console.log(`
            Bonus adicional => R$${this.bonus.toFixed(2)}`);
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Setor -> ${this.setor}
            Tamanho da equipe -> ${this.qtde_team}`);
    }
}
export const criarGerente = () => {
    let nome = prompt('Digite o nome -> ')
    let cpf = Number(prompt('CPF -> '))
    let nasc = prompt('Data de Nascimento -> ')
    let matricula = Number(prompt('Matricula ->'))
    let salario = Number(prompt('Salário -> '))
    let setor = prompt('Setor responsável -> ').toUpperCase()
    let qtde = Number(prompt('Quantos funcionários sob a gestão? '))
    const novoGerente = new Gerente(nome, cpf, nasc, salario, matricula, setor, qtde)
    return novoGerente
}