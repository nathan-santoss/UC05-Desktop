import { Pessoa } from "./Pessoa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

class Dono extends Pessoa{
    #patrimonio
    #percentualAcionario
    constructor(nome,cpf,nascimento, pa){
        super(nome,cpf,nascimento)
        this.patrimonio = 0
        this.percentualAcionario = pa
    }
    get patrimonio(){return this.#patrimonio}
    get percentualAcionario(){return this.#percentualAcionario}
    
    set patrimonio(valor){
        if(valor >= 0){
            this.#patrimonio = Number(valor.toFixed(2))
        }
        else{this.#patrimonio = 0}
    }

    set percentualAcionario(valor){
        if(valor >= 0){
            this.#percentualAcionario = Number(valor.toFixed(2))
        }
        else{this.#percentualAcionario = 0}
    }

    investir(valor){
        if(valor > 0){
            this.patrimonio += valor
            console.log('Investimento aplicado com sucesso!');
        }
        else{this.patrimonio += 0}
    }
    retirar(valor){
        if(valor > 0){
            this.patrimonio -= valor
            console.log('Investimento retirado com sucesso!');
        }
        else{this.patrimonio -= 0}
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Patrimonio atual = R$${this.patrimonio}
            Taxa de Participação = ${this.percentualAcionario}`);

    }
}

export const criarDono = () => {
    const nome = prompt('Nome do Dono: ').toUpperCase()
    const cpf = prompt('CPF: ')
    const nascimento = prompt('Data de nascimento: ')
    const pa = Number(prompt('Informe a taxa de Participação Acionária: '))
    const novoDono = new Dono(nome, cpf, nascimento, pa)
    return novoDono
}

