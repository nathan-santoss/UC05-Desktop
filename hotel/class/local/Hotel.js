import PromptSync from "prompt-sync"
const prompt = PromptSync()
import path from 'path'
import { mkdirSync, appendFileSync, readFileSync } from "fs"
import { Reserva } from './Reserva.js'
import { Quarto } from './Quarto.js'
import { normalizaData } from "../../menus/menuFunc/function.js"


export class Hotel{
    constructor(nome){
        this.nome = nome.toUpperCase()
        this.quartos = []
        this.reservas = []
        this.funcionarios = []
        this.clientes = []
    }
    adicionarQuarto(numero, categoria){
        const novoQuarto = new Quarto(numero, categoria)
        this.quartos.push(novoQuarto)
        console.log('Quarto adicionado!');
    }
    reservarQuarto(quarto, data, novoCliente, hoje){
        const novaReserva = new Reserva(quarto, data, novoCliente, hoje)
        this.reservas.push(novaReserva)
        console.log('Reserva efetivada!');
        adicionarRelatorio(novaReserva)
    }
    cancelarReserva(quarto, data, cliente){
        const reservaCancelada = this.reservas.findIndex(r => r.quarto.numero === quarto && normalizaData(r.data).getTime() === normalizaData(data).getTime() && r.cliente.nome === cliente)
        if(reservaCancelada === -1){throw new Error('Erro: Reserva não encontrada!')}
        else{
            this.reservas.splice(reservaCancelada, 1)
            console.log('Reserva Cancelada!');
        }
    }
    mostrarDisponiveis(dataEscolhida){
        const reservasDoDia = this.reservas.filter(r => normalizaData(r.data).getTime() === normalizaData(dataEscolhida).getTime())
        const quartosReservados = reservasDoDia.map(r => r.quarto.numero)
        const quartosDisponiveis = this.quartos.filter(quarto => {
            if(!quartosReservados.includes(quarto.numero)){return quarto}
        })
        console.log('[------- QUARTOS DISPONÍVEIS -------]');
        if(quartosDisponiveis.length === 0){throw new Error('Erro: Não há disponibilidade para o dia!')}
        quartosDisponiveis.forEach(quarto => {
            quarto.mostrarInfo()
            console.log('---------------------');
        });
        console.log('--- Fim da lista ---');
    }
    listarReservas(hoje){
        console.log('[--------- PRÓXIMAS RESERVAS ---------]');
        if(this.reservas.length === 0){throw new Error('Erro: É necessário criar uma reserva!')}
        this.reservas.forEach(r => {
            if(normalizaData(r.data).getTime() >= normalizaData(hoje).getTime()){
                console.log(`
                    Data -> ${r.data.toLocaleDateString('pt-BR')}
                    Nome: ${r.cliente.nome}
                    CPF: ${r.cliente.cpf}
                    Quarto -> N°${r.quarto.numero} (${r.quarto.categoria})
                    -----------------------------`);
            }
        });
    }
    detalharReserva(){
        let procurado = Number(prompt('Informe o CPF do cliente: '))
        procurado = this.reservas.filter(r => r.cliente.cpf === procurado)
        if(procurado.length === 0){throw new Error('Erro: Cliente não encontrado no registro!')}
        else{
            console.log(`
                [------ CLIENTE ENCONTRADO: ${procurado[0].cliente.nome} ------]`);  
            procurado.forEach(reservas => {
                console.log(`
                    Data -> ${reservas.data.toLocaleDateString('pt-BR')}
                    Quarto -> N°${reservas.quarto.numero} (${reservas.quarto.categoria})
                    --------------------------------`);
            });
        }
    }
    gerarRelatorio(){
        console.log(`
            Escolha uma das opções abaixo:
            [1] Relatório geral;
            [2] Selecionar um mês específico;
            [0] Voltar`);
        const selecionado = parseInt(prompt('-> '))
        switch(selecionado){
            case 1:
                const diretorio = path.resolve('relatorio', 'reservasGeral.txt')
                const relatorioGerado = readFileSync(diretorio, 'utf-8')
                console.log(`[--------- RELATÓRIO GERAL DE RESERVAS ---------]`);
                console.log(relatorioGerado);
                console.log(`\n[--------- FIM DO RELATÓRIO ---------]`);
                break
            case 2:
                const mesEscolhido = parseInt(prompt('Escolha o mês (em número) ->  '))
                
        }
        
    }
}

const adicionarRelatorio = (reservaFeita) => {
    const diretorioAbsoluto = 'relatorio'
    const arquivoGeral = path.join(diretorioAbsoluto, 'reservasGeral.txt')
    mkdirSync(diretorioAbsoluto, {recursive: true})
    const reserva = `
        Data de criação (${reservaFeita.dataDeCriacao.toLocaleDateString('pt-BR')})
        Nome -> ${reservaFeita.cliente.nome}
        Contato -> ${reservaFeita.cliente.contato}
        Data -> ${reservaFeita.data.toLocaleDateString('pt-BR')}
        Quarto -> ${reservaFeita.quarto.numero}
        ------------------ xxx ------------------\n`
    appendFileSync(arquivoGeral, reserva)
    console.log('Reserva inclusa no relatório!');

    const mesAtual = reservaFeita.data.toLocaleString('pt-BR', {month: 'long'})
    const arquivoDoMes = path.join(diretorioAbsoluto, `reservas-de-${mesAtual}.txt`)
    mkdirSync(diretorioAbsoluto, {recursive: true})
    appendFileSync(arquivoDoMes, reserva)
}


