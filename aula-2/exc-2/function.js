import promptSync from 'prompt-sync'
const prompt = promptSync()

class Conta {
    #nome
    #saldo
    #rendimento
    constructor(nome){
        this.#nome = nome
        this.#saldo = 0
        this.#rendimento
    }
    get nome(){return this.#nome}
    get saldo(){return this.#saldo.toFixed(2)}
    get CalcularRendimento(){
        this.#rendimento = (this.#saldo * 10/100)
        console.log(`
            O saldo está rendendo 10% a.a => R$${this.#rendimento.toFixed(2)}`);
    }
    set nome(novaNovo){console.log(`Você não possui autorização para mudar o nome!`);}
    set saldo(valor){console.log(`Deposite ou saque para alterar o saldo!`);}
    set sacar(despesa){
        if(despesa > 0 && !isNaN(despesa)){
            if(this.#saldo > 0 && this.#saldo > despesa){
                this.#saldo -= despesa
                console.log('Saque realizado com sucesso!');}
            else{console.log(`Você não possui saldo para saque!`);}
            console.log(`o saldo atual é -> R$${this.saldo}`);
        }
        else{console.log('Valor inválido para saque!');}
        
    }
    set depositar(receita){
        if(receita > 0 && !isNaN(receita)){
            this.#saldo += receita
            console.log('Deposito realizado com sucesso!');
            console.log(`o saldo atual é -> R$${this.saldo}`);
        }
        else{console.log('Valor inválido para deposíto!');}
    }
}

export const menu = (select,pessoas,flag) =>{
    switch(select){
        case 1:
            const novaPessoa = new Conta(prompt('Informe o nome do usuário da conta: ').toUpperCase())
            pessoas.push(novaPessoa)
            break
        case 2:
            if(pessoas.length > 0){
                const buscar = prompt('Informe o nome da usuário -> ').toUpperCase()
                const receita = Number(prompt('Quanto será depositado? '))
                if(pessoas.some(pessoa => pessoa.nome === buscar)){
                    pessoas.map(pessoa => {
                        if(pessoa.nome === buscar){
                            pessoa.depositar = receita
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
                            pessoa.sacar = despesa
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
                        Saldo -> ${pessoa.saldo}`);
                        pessoa.CalcularRendimento
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