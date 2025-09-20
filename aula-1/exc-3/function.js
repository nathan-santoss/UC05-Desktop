import promptSync from 'prompt-sync'
const prompt = promptSync()

export class Produto{
    constructor(nome,catg){
        this.nome = nome.toUpperCase()
        this.preco = 'NÃO DEFINIDO'
        this.qtde = 0
        this.catg = catg.toUpperCase()
        this.disp = 'Indisponível'
    }
    exibirInfo = () => {
        console.log(`
            [---- ${this.nome.toUpperCase()} ----]
            Preço -> ${this.preco}
            Quantidade -> ${this.qtde}
            Categoria -> ${this.catg}
            Disponível -> ${this.disp}`);
    }
    exibirQtde = () => {
        console.log(`Quantidade do produto -> ${this.qtde}`);
    }
    addEstoque = () => {
        this.qtde += Number(prompt('Informe a quantidade para ADICIONAR -> '))
        this.disp = 'DISPONÍVEL'
    }
    removeEstoque = () => {
        this.qtde -= Number(prompt('Informe a quantidade para REMOVER -> '))
        if(this.qtde <= 0){this.disp = 'INDISPONÍVEL'}
    }
    definirPreco = () => {
        this.preco = Number(prompt(`Informe o preço de cada ${this.nome} -> `))
        this.preco = `R$${(this.preco).toFixed(2)}`
    }
    checkDisp = () => {
        console.log(`O produto ${this.nome} está ${this.disp} para venda`)
    }
}

export const executar = (selecao,novoProduto,flag) => {
    switch(selecao){
        case 1:
            novoProduto.exibirInfo()
            break
        case 2:
            novoProduto.exibirQtde()
            break
        case 3:
            novoProduto.addEstoque()
            break
        case 4:
            novoProduto.removeEstoque()
            break
        case 5:
            novoProduto.definirPreco()
            break
        case 6:
            novoProduto.checkDisp()
            break
        case 0:
            flag = false
            break
        default:
            console.log(`Opção inválida!`);
            break
    }
    return flag
}