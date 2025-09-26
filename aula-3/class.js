export class Memoria {
    #tipo;
    #frequencia;
    #capacidade;
    constructor(tipo, frequencia, capacidade){
        this.#tipo = tipo.UpperCase()
        this.#frequencia = frequencia
        this.#capacidade = parseInt(capacidade)
    }
    get tipo(){return this.#tipo}
    get frequencia(){return this.#frequencia}
    get capacidade(){return this.#capacidade}
    set tipo(item){
        if(item !== this.#tipo){
            this.#tipo = item
        }else{console.log('O item já está inserido!');}
    }
    set frequencia(num){
        if(num !== this.#frequencia && num > 0){
            this.#frequencia = num.toFixed(1)
        }else{console.log('Valor inválido!');}
    }
    set capacidade(tamanho){
        if(tamanho !== this.#capacidade && tamanho > 0){
            this.#capacidade = parseInt(tamanho)
        }
    }
    usarMemoria(programas){
        const consumo = programas.reduce((acumulador, soft) => acumulador + soft.consumo,0)
        if(consumo <= this.#capacidade){            
            console.log(`
                [------- GERENCIADOR DE TAREFAS -------]`);
            programas.forEach(software => {
                console.log(`
                    Nome -> ${software.nome}
                    Consumo -> ${software.consumo} Mbps`);
            });
            console.log(`
                Total em uso => ${consumo.toFixed(2)} Mbps
                Disponível -> ${(this.#capacidade - consumo).toFixed(2)}`);
        }
    }
    liberarMemoria(programas){
        const consumo = programas.reduce((acumulador, soft) => acumulador + soft.consumo,0)
        console.log(`
            [---------- LIBERAÇÃO DE MEMÓRIA ----------]
            ${consumo.toFixed(2)} Mbps Liberados!`);
    }
}

export class Software {
    constructor(nome, consumo){
        this.nome = nome
        this.consumo = consumo
    }
}