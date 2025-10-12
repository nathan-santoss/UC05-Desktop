import { Cliente } from "./Cliente.js";

export class Funcionario extends Cliente{
    constructor(nome, cpf, contato, matricula){
        super(nome, cpf, contato)
        this.matricula = matricula
    }
    exibirInfo(){
        super.exibirInfo()
        console.log(`
            Matrícula: ${this.matricula}`);
    }
}