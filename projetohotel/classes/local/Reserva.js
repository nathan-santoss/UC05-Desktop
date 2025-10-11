import PromptSync from "prompt-sync"
import { criarCliente } from "../pessoas/Cliente.js"
const prompt = PromptSync()


class Reserva{
    constructor(id, quarto,cliente, data_checkin, data_checkout){
        this.id = parseInt(id)
        this.quarto = quarto
        this.cliente = cliente
        this.checkin = data_checkin
        this.checkout = data_checkout
    }
}
export const criarReserva = (ListaQuartos) => {
    const cliente = criarCliente()
    const ano = 2025
    const mesEntrada = parseInt(prompt('Informe o mês de check-in: ')) -1
    const diaEntrada = parseInt(prompt('dia de check-in: '))
    const checkin = new Date(ano, mesEntrada, diaEntrada)

    const mesSaida = parseInt(prompt('Informe o mês de check-in: ')) -1
    const diaSaida = parseInt(prompt('dia de check-in: '))
    const checkout = new Date(ano, mesSaida, diaSaida)
    ListaQuartos.forEach(quarto => {
        if(checkin.getTime() >= quarto.checkout.getTime() && checkout.getTime() <= quarto.checkin.getTime()){
            console.log(`
                [----- Quartos disponíveis para a data -----]
                Número -> ${quarto.num}
                Categoria -> ${quarto.tipo}`);
        }
    });
    const selecionado = parseInt(prompt('Selecione o número do quarto desejado: '))
}