import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { criarQuarto } from "./Quarto.js"
import { criarReserva } from "./Reserva.js"


export class Hotel{
    constructor(nome){
        this.nome = nome.toUpperCase()
        this.quartos = []
        this.reservas = []
    }
    adicionarQuarto(){
        const novoQuarto = criarQuarto()
        this.quartos.push(novoQuarto)
    }
    listarDisponiveis(){
        if(this.quartos.length === 0){throw new Error('Erro: É necessário criar quartos primeiro!')}
        console.log('[---- QUARTOS DISPONÍVEIS ----]');
        this.quartos.forEach(quarto => {
            console.log(`
                Número -> ${quarto.num}
                Categoria -> ${quarto.tipo}`);
        });
    }
    reservarQuarto(){
        const novaReserva = criarReserva(this.reservas)
        this.reservas.push(novaReserva)
    }
}


export const criarHotel = () => {
    const nome = prompt('Informe o nome do Hotel -> ')
    const hotel = new Hotel(nome)
    return hotel
}