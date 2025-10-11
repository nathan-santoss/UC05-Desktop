export class Pessoa{
    #nome
    #cpf
    constructor(nome, cpf, hierquia){
        this.nome = nome.toUpperCase()
        this.cpf = cpf
        this.hierquia = hierquia
    }
    get nome(){return this.#nome}
    get cpf(){return this.#cpf}

    set nome(texto){
        if(texto.length < 3){
            throw Error('Erro: O nome é muito curto!')
        }
        if(!isNaN(Number(texto))){
            throw Error('Erro: Use apenas letras!')
        }
        this.#nome = texto
        
    }
    set cpf(num){
        if(num.length !== 11){
            throw new Error('Erro: O CPF deve ter apenas 11 dígitos')
        }
        testarCPF(num)
        this.#cpf = Number(num)
    }
    mostrarInfo(){
        console.log(`
            Nome -> ${this.nome}
            CPF -> ${this.cpf}`);
    }
}

const testarCPF = (num) => {
    let cpfValido = /[a-zA-Z]/.test(num)
    if(cpfValido === true){throw new Error('Erro: O CPF não pode contar letras')} // true signifia que TEM letra  
}