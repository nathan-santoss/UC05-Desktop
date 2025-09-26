import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Armazenamento, Memoria, Processador, Software, Tela, Computador } from './class.js'

export let computadores = []
export const inicializar = () => {
    console.clear()
    console.log('[------- MEMORIA -------]');
    const frequencia = Number(prompt('Informe a frequencia (Hz/s) -> '))
    const capacidade = Number(prompt('Qual a capacidade da memoria? '))
    const novaMemoria = new Memoria("RAM",frequencia,capacidade)
    console.clear()
    
    console.log('[------- PROCESSADOR -------]');
    const marca = prompt('Marca -> ')
    const modelo = prompt('Modelo -> ')
    const nucleo = prompt('Núcleo -> ')
    const velocidade = Number(prompt('Velocidade (hz) -> '))
    const novoProcessador = new Processador(marca,modelo,nucleo,velocidade)
    console.clear()

    console.log('[------- ARMAZENAMENTO -------]');
    const tipo = prompt('Escolha o tipo do Armazenamento -> ')
    const capacidade_arm = Number(prompt('Informe a capacidade -> '))
    const novoArmazenamento = new Armazenamento(tipo,capacidade_arm)
    console.clear()
    
    console.log('[------- TELA -------]');
    const tamanho_tela = Number(prompt('Tamanho -> '))
    const resolucao = Number(prompt('Resolução da tela -> '))
    const novaTela = new Tela(tamanho_tela,resolucao)
    console.clear()

    console.log('[------- COMPUTADOR -------]');
    const marca_comp = prompt('Informe a marca -> ')
    const modelo_comp = prompt('Modelo -> ')
    let novoComputador = new Computador(marca_comp, modelo_comp, novaMemoria,novoProcessador,novoArmazenamento,novaTela)
    computadores.push(novoComputador)
}