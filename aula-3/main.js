import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Memoria, Software } from './class.js'

const tipo = 'RAM'
const frequencia = Number(prompt('Informe a frequencia (Hz/s) -> '))
const capacidade = Number(prompt('Qual a capacidade da memoria? '))
const novaMemoria = new Memoria(tipo,frequencia,capacidade)
let consumindo = 0
let emAberto = []
let flag = true
while(flag){
    const soft = new Software(prompt('Informe o nome do programa '), Number(prompt('Agora, qual o consumo dele? ')))
    consumindo += soft.consumo
    if(consumindo <= novaMemoria.capacidade){
        
        emAberto.push(soft)
    }else{
        console.log(`Memoria RAM indisponível, libere espaço!`);
        break
    }
    const continuar = Number(prompt('Deseja executar outro programa? [1]SIM ou [2] NÃO -> '))
    switch(continuar){
        case 1:
            break
        case 2:
            flag = false
            break
        default:
            console.log('OPÇÃO INVÁLIDA!');
            break
    }
}
novaMemoria.usarMemoria(emAberto)