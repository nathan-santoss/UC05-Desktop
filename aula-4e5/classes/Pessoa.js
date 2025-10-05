import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Pessoa{
    #nome
    #cpf
    #nascimento
    constructor(nome,cpf,nascimento){
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
    }
    get nome(){return this.#nome}
    get cpf(){return this.#cpf}
    get nascimento(){return this.#nascimento}

    set nome(texto){
        if(isNaN(texto) && texto.length > 2 && texto.trim() !== ''){
            this.#nome = texto.toUpperCase()
            console.log('Nome registrado com sucesso!');
        }
        else{
            this.#nome = 'Nome inválido!'
            console.log('Nome inválido!');
        }
    }
    set cpf(num){
        if(!isNaN(Number(num)) && num.length <= 11){
            this.#cpf = num
            console.log('CPF registrado com sucesso!');
        }
        else{
            this.#cpf = 'CPF inválido!'
            console.log('CPF inválido!');
        }
    }
    set nascimento(valor){
        if(valor.length <= 10){
            let validacao = 0
            const teste = valor.split('/')
            if(parseInt(teste[0], 10) <= 31){
                validacao++
            }
            if(parseInt(teste[1], 10) <= 12){
                validacao++
            }
            if(parseInt(teste[2], 10 >= 1900 && parseInt(teste[2],10) <= 2025)){
                validacao++
            }
            if(validacao === 3){
                this.#nascimento = valor
                console.log('Data de nascimento registrada com sucesso!');
            }
            else{
                this.#nascimento = 'Data inválida!'
                console.log('Data de aniversário inválida!');}
        }
        else{console.log('Data inválida!');}
    }

    mostrarInfo(){
        console.clear()
        console.log(`
            Nome -> ${this.nome}
            CPF -> ${this.cpf}
            Data de nascimento -> ${this.nascimento}`);
    }
}