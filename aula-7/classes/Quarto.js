export class Quarto{
    constructor(numQuarto, quarto_categoria){
        this.numQuarto = parseInt(numQuarto)
        this.quarto_categoria = quarto_categoria
        this.status = true
    }
    reservar(){
        this.status = false
    }
    checkout(){
        this.status = true
    }
}