import promptSync from 'prompt-sync'
const prompt = promptSync()

export class Cliente {
    #nome;
    #endereco;
    #renda;
    constructor(nome){
        this.#nome = nome
        this.#endereco
        this.#renda
    }
    get nome(){
        return this.#nome
    }
    get endereco(){
        return this.#endereco
    }
    get renda(){
        return this.#renda
    }
    set nome(texto){
        if(texto.trim() === '' || isNaN(texto)){this.#nome = texto.toUpperCase()}
        else{console.log(`Preenchimento inválido!`);}
    }
    set endereco(lugar){
        if(lugar.length > 0 || lugar.trim() === ''){this.#endereco = lugar.toUpperCase()}
        else{console.log(`Preenchimento inválido!`);}
    }
    set renda(valor){
        if(valor > 0 && !isNaN(valor)){
            this.#renda = valor.toFixed(2)
        }
    }

    imprimir(){
        console.log(`
            [------ ${this.#nome} ------]
            Endereço -> ${this.endereco}
            Renda -> R$${this.#renda}`);
    }
    
}

export const iniciar = (op,pessoas, flag) => {
    switch(op){
        case 0:
            flag = false
            break
        case 1:
            pessoas.forEach((pessoa, i) => {
                if(pessoa.nome === undefined){
                    console.log(`
                        Usuário ${i+1} sem definição`);
                }
                else{
                    pessoa.imprimir()
                }
            }); 
            break
        case 2:
            let loop = true
            while(loop){
                let user = prompt('Informe o nome do usuário -> ')
                if(pessoas.some(pessoa => pessoa.nome === user)){
                    console.log(`
                        Escolha um dado para alterar:
                        [1] - Nome
                        [2] - Renda;
                        [3] - Endereço
                        [0] - Voltar`
                    );
                    const escolha = Number(prompt('--> '))
                    switch(escolha){
                        case 1:
                            pessoas.map(pessoa => {
                                if(pessoa.nome === user){
                                    pessoa.nome = prompt('Qual o novo nome? ')
                                }
                            })
                            break
                        case 2:
                            pessoas.map(pessoa => {
                                if(pessoa.nome === user){
                                    pessoa.renda = Number(prompt('Informe a renda -> '))
                                }
                            })
                            break
                        case 3:
                            pessoas.map(pessoa => {
                                if(pessoa.nome === user){
                                    pessoa.endereco = prompt('Informe o endereço -> ')
                                }
                            })
                            break
                        case 0:
                            loop = false
                            break
                    }
                }
                else{console.log(`O usuário não existe!`);}
            }
            break
        case 3:
            const nome = prompt('Informe o nome do cliente -> ').toUpperCase()
            const novaPessoa = new Cliente(nome)
            pessoas.push(novaPessoa)
            break
        default:
            console.log(`Opção inválida!`);
            break
    }
    return flag
}