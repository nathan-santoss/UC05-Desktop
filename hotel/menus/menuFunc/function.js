import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Funcionario } from "../../class/Funcionário.js"


export const criarFuncionario = (listaFuncionarios) => {
    console.log('[------ Cadastro de Funcionários ------]');
    const nome = prompt('Nome: ')
    const cpf = prompt('CPF: ')
    const contato = prompt('Telefone/Celular: ')
    const matricula = parseInt(prompt('Matrícula: '))
    const novoFuncionario = new Funcionario(nome, cpf, contato, matricula)
    return novoFuncionario
}

export const autenticar = (listaFuncionarios) => {
    console.log(`
        [-------- ADMINISTRAÇÃO - LOGIN --------]`);
    const login = prompt('Login (nome) -> ').toUpperCase()
    const senha = Number(prompt('Senha (CPF) -> '))
    const autenticado = listaFuncionarios.find(funcionario => {
        if(login === funcionario.nome && senha === funcionario.cpf){return funcionario}
    })
    if(!autenticado){throw new Error('Erro: Dados inválidos!')}
    else{return true}
}

export const checarDisp = (listaReservas, dataEscolhida, quarto_numero) => {
    const reservasDoDia = listaReservas.filter(r => r.data.getTime() === dataEscolhida.getTime())
    const quartoOcupado = reservasDoDia.some( r => r.quarto.numero === quarto_numero)
    if(quartoOcupado){return true}
    else{return false}
}

export const checarQuartoExistente = (listadeQuartos, num_quarto) => {
    let jaExiste = listadeQuartos.some(q => q.numero === num_quarto)
    return jaExiste
}

export const normalizaData = (data) => {
    const datanormal = new Date(data)
    datanormal.setHours(0,0,0,0)
    return datanormal
}