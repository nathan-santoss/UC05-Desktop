import { Quarto } from "./Quarto.js";

export class Reserva extends Quarto{
    constructor(numQuarto, quarto_categoria, dataReserva, cliente_obj){
        super(numQuarto, quarto_categoria)
        this.dataReserva = dataReserva
        this.cliente = cliente_obj
    } 
}