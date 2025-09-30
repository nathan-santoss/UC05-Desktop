export class Pessoa{ // classe abstrata
    #cpf
    constructor(nome, cpf, nascimento){
        this.nome = nome
        this.#cpf = cpf
        this.nascimento = nascimento
    }
    get cpf(){return this.#cpf}
    set cpf(num){
        if(num !== this.#cpf && !isNaN(Number(num))){
            this.#cpf = num
        }
        else{console.log('Valor inválido! Insira um número válido.')}
    }
    mostrarInfo(){
        console.log(`
            Nome -> ${this.nome}
            CPF -> ${this.cpf}
            Data de Nascimento -> ${this.nascimento}`)
    }
}


