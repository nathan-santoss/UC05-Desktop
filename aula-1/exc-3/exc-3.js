import promptSync from 'prompt-sync'
const prompt = promptSync()
import { executar, Produto } from './function.js'

let flag = true
let nome = prompt('Informe o nome do produto -> ')
let catg = prompt('Categoria do produto -> ')
const novoProduto = new Produto(nome,catg)
while(flag){
    console.log(`
        [====== MENU ======]
        [1] Exibir informações
        [2] Exibir Quantidade
        [3] Adicionar ao Estoque
        [4] Remover do Estoque
        [5] Definir o preço
        [6] Checar disponibilidade
        [0] Sair`);
    const op = Number(prompt('--> '))
    console.clear()
    flag = executar(op,novoProduto,flag)
}