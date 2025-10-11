import { Pessoa } from "./Pessoa.js";

class Funcionario extends Pessoa{
    constructor(nome, cpf, hierquia, matricula){
        super(nome, cpf, hierquia)
        this.matricula = parseInt(matricula)
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Matricula -> ${this.matricula}`);
    }
}

export const criarFuncionario = () => {
    const nome = prompt('Digite o nome: ')
    const cpf = prompt('CPF: ')
    const hierquia = 'FUNCIONÁRIO'
    const matricula = Number(prompt('Informe a matricula: '))
    const novoFuncionario = new Funcionario(nome, cpf, hierquia, matricula)
    return novoFuncionario
}
export let Funcionarios = []