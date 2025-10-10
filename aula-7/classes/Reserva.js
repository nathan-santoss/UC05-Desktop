import { Quarto } from "./Quarto.js";

export class Reserva extends Quarto{
    constructor(quarto, cliente_obj){
        this.dataReserva = gerarData()
        this.cliente = cliente_obj
        this.quarto = quarto
    } 
}
const gerarData = () => {
    let data = new Date()
    let datatual =+ data.toLocaleDateString('pt-BR')
}