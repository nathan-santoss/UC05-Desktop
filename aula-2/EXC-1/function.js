import promptSync from 'prompt-sync'
const prompt = promptSync()

export class Cliente {
    #nome; // indicando que as propriedades são privadas
    #endereco;
    #renda;
    constructor(nome){ //informando que durante a criação será atribuido o nome
        this.#nome = nome
        this.#endereco
        this.#renda
    }
    get nome(){ //getters
        return this.#nome
    }
    get endereco(){
        return this.#endereco
    }
    get renda(){
        return this.#renda
    }
    set nome(texto){ // recebo a string (novo nome)
        if(texto.trim() === '' || isNaN(texto)){this.#nome = texto.toUpperCase()}
        //Se a string sem espaços é vazia OU texto é Not a Number 
        else{console.log(`Preenchimento inválido!`);}
    }
    set endereco(lugar){
        if(lugar.length > 0 || lugar.trim() === ''){this.#endereco = lugar.toUpperCase()}
        //teste para saber se tem mais de 1 caracter 
        else{console.log(`Preenchimento inválido!`);}
    }
    set renda(valor){
        if(valor > 0 && !isNaN(valor)){
            // teste para saber se é maior que 0 e se é um NUMBER
            this.#renda = valor.toFixed(2)
        }
        else{console.log(`Valor inválido!`);}
    }

    imprimir(){
        console.log(`
            [------ ${this.#nome} ------]
            Endereço -> ${this.endereco}
            Renda -> R$${this.#renda}`);
    }
    
}

export const iniciar = (op,pessoas, flag) => {// solicito esses paremetros
    switch(op){
        case 0:
            flag = false
            break
        case 1:
            console.clear()
            pessoas.forEach((pessoa, i) => { //percorrendo o array pessoas
                if(pessoa.nome === undefined){ // teste para saber se está preenchido
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
            console.clear()
            let user = prompt('Informe o nome do usuário -> ').toUpperCase()     
            if(pessoas.some(pessoa => pessoa.nome === user)){ //teste para saber se o nome existe
                while(loop){
                    console.log(`
                        Escolha um dado para alterar:
                        [1] - Nome
                        [2] - Renda;
                        [3] - Endereço
                        [0] - Voltar`
                    );
                    const escolha = Number(prompt('--> '))
                    console.clear()
                    switch(escolha){
                        case 1:
                            pessoas.map(pessoa => { // percorre o array 
                                if(pessoa.nome === user){ //teste se é o mesmo usuário
                                    pessoa.nome = prompt('Qual o novo nome? ')
                                    user = pessoa.nome // set acionado
                                    // garanto que caso queira mais alguma alteração, user também será alterado
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
            }
            else{console.log(`O usuário não existe!`); break;}
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
    return flag // flag sempre retorna TRUE garantindo a repetição a menos que o usuário digite 0
}