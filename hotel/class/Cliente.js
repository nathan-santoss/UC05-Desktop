export class Cliente{
    #nome
    #cpf
    #contato
    constructor(nome, cpf, contato){
        this.nome = nome.toUpperCase()
        this.cpf = cpf
        this.contato = contato
    }
    get nome(){return this.#nome}
    get cpf(){return this.#cpf}
    get contato(){return this.#contato}

    set nome(texto){
        if(!isNaN(Number(texto))){{throw new Error('Erro: Digite apenas letras')}}
        this.#nome = texto
    }
    set cpf(num){
        if(num.length !== 11){throw new Error('Erro: É necessário que o CPF tenha 11 dígitos')}
        this.#cpf = Number(num)
    }
    set contato(num){
        if(num.length !== 11){throw new Error('Erro: É necessário que o CPF tenha 11 dígitos')}
        this.#contato = Number(num)
    }
    exibirInfo(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Contato: ${this.contato}`);
    }
}