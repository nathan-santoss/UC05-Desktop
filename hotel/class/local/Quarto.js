export class Quarto {
    constructor(numero, categoria) {
        this.numero = parseInt(numero)
        this.categoria = categoria.toUpperCase()
    }
    mostrarInfo(){
        console.log(`
            Quarto N°${this.numero}
            Categoria: ${this.categoria}`);
    }
}