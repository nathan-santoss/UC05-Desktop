import promptSync from 'prompt-sync'
const prompt = promptSync()

class Conta { // tornando privado 
    #nome
    #saldo
    #agencia
    #conta
    constructor(nome,conta){
        this.#nome = nome
        this.#saldo = 0
        this.#agencia = "0001"
        this.#conta = conta
        this.rendimento
    }
    get nome(){return this.#nome} // criação dos getters
    get saldo(){return this.#saldo.toFixed(2)}
    get agencia(){return this.#agencia}
    get conta(){return this.#conta}
    // criação de setters
    set nome(novaNovo){console.log(`Você não possui autorização para mudar o nome!`);} // impede do usuário tentar atribuir um valor em OBJETO.nome = valor 
    set saldo(valor){console.log(`Deposite ou saque para alterar o saldo!`);}
    sacar(despesa){
        if(despesa > 0 && !isNaN(despesa)){ // testo para saber se o saque é maior que 0 e se ele realmente é um número
            if(this.#saldo > 0 && this.#saldo > despesa){ // se passar, vejo se o saldo atual é maior que 0 && se 
                this.#saldo -= despesa
                console.log('Saque realizado com sucesso!');}
            else{console.log(`Você não possui saldo para saque!`);}
            console.log(`o saldo atual é -> R$${this.saldo}`);
        }
        else{console.log('Valor inválido para saque!');}
        
    }
    depositar(receita){
        if(receita > 0 && !isNaN(receita)){
            this.#saldo += receita
            console.log('Deposito realizado com sucesso!');
            console.log(`o saldo atual é -> R$${this.saldo}`);
        }
        else{console.log('Valor inválido para deposíto!');}
    }
    CalcularRendimento(){
        this.rendimento = (this.#saldo * 10/100)
        console.log(`
            O saldo está rendendo 10% a.a => R$${this.rendimento.toFixed(2)}`);
    }
}













export const menu = (select,pessoas,flag) =>{
    switch(select){
        case 1:
            const nome = prompt('Informe o nome do usuário da conta: ').toUpperCase()
            let conta = ""
            for(let i = 0; i <= 6; i++){
                conta += Math.floor(Math.random() * (9))
            }                                             
            const novaPessoa = new Conta(nome,conta)

            pessoas.push(novaPessoa)
            break
        case 2:
            if(pessoas.length > 0){
                const buscar = prompt('Informe o nome da usuário -> ').toUpperCase()
                const receita = Number(prompt('Quanto será depositado? '))
                if(pessoas.some(pessoa => pessoa.nome === buscar)){
                    pessoas.map(pessoa => {
                        if(pessoa.nome === buscar){
                            pessoa.depositar(receita)
                        }
                    })
                }
                else{console.log('O usuário não existe!');}
            }
            else{console.log('Ainda não há usuários criados');}
            break
        case 3:
            if(pessoas.length > 0){
                const buscar = prompt('Informe o nome do usuário: ').toUpperCase()
                const despesa = Number(prompt('Qual o valor do saque? '))
                if(pessoas.some(pessoa => pessoa.nome === buscar)){
                    pessoas.map(pessoa => {
                        if(pessoa.nome === buscar){
                            pessoa.sacar(despesa)
                        }
                    })
                }
                else{console.log(`O usuário não existe!`);}
            }
            else{console.log('Ainda não há usuários criados');}
            break
        case 4:
            if(pessoas.length > 0){
                pessoas.forEach((pessoa, i) => {
                    console.log(`
                        [------- Usuario ${i+1} -------]
                        Nome -> ${pessoa.nome}
                        Agência -> ${pessoa.agencia}
                        Conta -> ${pessoa.conta}
                        Saldo -> ${pessoa.saldo}`);
                        pessoa.CalcularRendimento()
                });
            }
            else{console.log('Ainda não há usuários criados');}
            break
        case 0:
            flag = false
            return flag
            break
        default: console.log(`Opção inválida!`);
    }
    return flag
}