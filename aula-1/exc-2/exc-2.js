import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Data, meses} from './function.js'
let flag = true

let dia = Number(prompt('Informe (em números) o dia atual-> '))
let mes = Number(prompt('Agora informe o Mês atual -> '))
let ano = Number(prompt('Qual o ano? '))
let dataAtual = new Data(dia,mes,ano)

while(flag){
    console.clear()
    console.log(`
        [------ CALENDÁRIO ------]`);
    dataAtual.escreverData(meses)
    dataAtual.escreverMes(meses)
    dataAtual.fimDoAno(meses)

    console.log(`
        [1] - Alterar mês;
        [2] - Alterar dia;
        [0] - Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            dataAtual.mes = Number(prompt('Mês -> '))
            break
        case 2:
            dataAtual.dia = Number(prompt('Dia -> '))
            break
        case 0:
            flag = false
            break
        default:
            console.log(`Opção inválida!`);
            break
    }
}
