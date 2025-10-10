import { criarQuarto } from "../function/Instancias.js";

class Hotel{
    constructor(nome, qtde_quartos, reservas){
        this.nome = nome.toUpperCase()
        this.quartos = []
        this.qtde_quartos = this.quartos.length
        this.reservas = parseInt(reservas)
    }
    adicionarQuartos(){
        const quarto = criarQuarto()
        this.quartos.push(quarto)
        console.log('Novo quarto adicionado ao sistema!');
    }
    reservarQuarto(){
        
    }

    
}