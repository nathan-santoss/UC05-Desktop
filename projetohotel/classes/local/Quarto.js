import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Quarto{
    constructor(num){
        this.num = parseInt(num)
        this.tipo = gerarCategoria()
        this.ocupado = false
        this.checkin = 0
        this.checkout = 0
    }

}
const gerarCategoria = () => {
    let flag = true
    while(flag){
        console.log(`
            Selecione qual será o tipo do Quarto:
            [1] Luxoso
            [2] Básico`);
        const op = Number(prompt('-> '))
        switch(op){
            case 1:
                flag = false
                return 'lux'
                break
            case 2:
                flag = false
                return 'bsc'
                break
            default:
                console.log('Opção inválida!');
                break
        }
    }
}

export const criarQuarto = () => {
    const num = Number(prompt('Informe o número do quarto: '))
    const novoQuarto = new Quarto(num)
    return novoQuarto
}