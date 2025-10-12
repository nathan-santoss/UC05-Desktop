import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Reserva } from './Reserva.js'
import { Quarto } from './Quarto.js'

class Hotel{
    constructor(nome){
        this.nome = nome.toUpperCase()
        this.quartos = []
        this.reservas = []
        this.funcionarios = []
    }
    adicionarQuarto(numero, categoria){
        const novoQuarto = new Quarto(numero, categoria)
        this.quartos.push(novoQuarto)
    }
    reservarQuarto(quarto, data){
        const nome = prompt('Nome: ')
        const cpf = prompt('CPF: ')
        const contato = prompt('Telefone/Celular: ')
        const novaReserva = new Reserva(quarto, data, cliente)
        this.reservas.push(novaReserva)
    }
    cancelarReserva(quarto, data, cliente){
        const reservaCancelada = this.reservas.findIndex(r => r.quarto.num === quarto && r.data === data && r.cliente.nome === cliente)
        this.reservas.splice(reservaCancelada, 1)
    }
    mostrarDisponiveis(dataEscolhida){
        const reservasDoDia = this.reservas.filter(r => r.data === dataEscolhida)
        const quartosReservados = reservasDoDia.map(r => r.quarto.num)
        const quartosDisponiveis = this.quartos.filter(quarto => {
            if(!quartosReservados.includes(quarto.num)){return quarto}
        })
        console.log('[------- QUARTOS DISPONÍVEIS -------]');
        quartosDisponiveis.forEach(quarto => {
            quarto.mostrarInfo()
            console.log('---------------------');
        });
        console.log('--- Fim da lista ---');
    }
    listarReservas(){
        console.log('[--------- PRÓXIMAS RESERVAS ---------]');
        this.reservas.forEach(r => {
            console.log(`
                Data -> ${r.data}
                Nome: ${r.cliente.nome}
                CPF: ${r.cliente.cpf}
                Quarto -> N°${r.quarto.num} (${r.quarto.categoria})
                -----------------------------`);
        });
    }
    detalharReserva(){
        let procurado = Number(prompt('Informe o CPF do cliente: '))
        procurado = this.reservas.filter(r => r.cliente.cpf === procurado)
        if(!procurado){throw new Error('Erro: Cliente não encontrado no registro!')}
        else{
            console.log(`
                [------ CLIENTE ENCONTRADO: ${procurado.cliente.nome} ------]`);  
            procurado.forEach(reservas => {
                console.log(`
                    Data -> ${reservas.data}
                    Quarto -> N°${reservas.quarto.num} (${reservas.quarto.categoria})
                    --------------------------------`);
            });
        }
    }
}