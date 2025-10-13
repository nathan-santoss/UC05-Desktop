import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Reserva } from './Reserva.js'
import { Quarto } from './Quarto.js'
import { Cliente } from "../Cliente.js"

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
    reservarQuarto(quarto, data, novoCliente){
        const novaReserva = new Reserva(quarto, data, novoCliente)
        this.reservas.push(novaReserva)
        console.log('Reserva efetivada!');
    }
    cancelarReserva(quarto, data, cliente){
        const reservaCancelada = this.reservas.findIndex(r => r.quarto.numero === quarto && r.data.getTime() === data.getTime() && r.cliente.nome === cliente)
        if(reservaCancelada === -1){throw new Error('Erro: Reserva não encontrada!')}
        else{
            this.reservas.splice(reservaCancelada, 1)
            console.log('Reserva Cancelada!');
        }
    }
    mostrarDisponiveis(dataEscolhida){
        const reservasDoDia = this.reservas.filter(r => r.data.getTime() === dataEscolhida.getTime())
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
            if(r.data.getTime() >= hoje.getTime()){
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
}