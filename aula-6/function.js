import promptSync from 'prompt-sync'
import { Conta } from './class.js'
const prompt = promptSync()

export const gerarConta = () => {
    let num = ''
    let repetir = 0
    while(repetir < 6){
        num += Math.floor(Math.random() * 10)
        repetir++
    }
    return num
}

export const criarConta = () => {
    const nome = prompt('Informe seu nome: ')  
    const novaConta = new Conta(nome)
    return novaConta
}

export const menuCliente = (cliente) => {
    let repetir = true
    while(repetir){
        console.log(`
            [=== Menu ===]
            [1] Mostrar informações
            [2] Depositar
            [3] Sacar
            [4] Calcular Rendimento
            [0] Voltar`);
        const select = Number(prompt('--> '))
        console.clear()
        try {
            switch(select){
                case 0:
                    repetir = false
                    break
                case 1:
                    cliente.imprimirInfo()
                    break
                case 2:
                    cliente.depositar(Number(prompt('Informe o valor do Depósito: ')))
                    break
                case 3:
                    cliente.sacar(Number(prompt('Informe o valor do saque: ')))
                    break
                case 4:
                    cliente.calcularRendimento()
                    break
                default:
                    console.log('Opção inválida!');
                    break
            }
        } catch (error) {
            console.error(error.message)
        } 
    }
}