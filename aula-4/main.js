import { criarFuncionario } from "./classes/funcionario.js";
import { criarGerente } from "./classes/gerente.js";
import { criarDiretor } from "./classes/diretor.js";
import { criarDono } from "./classes/dono.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let flag = true
while(flag){
    console.log(`
        [------ Criação ------]
        [1] Funcionário;
        [2] Gerente;
        [3] Diretor;
        [4] Dono
        [0] Fechar`);
    const op = Number(prompt('--> '))
    console.clear()
    switch(op){
        case 1:
            const novoFuncionario = criarFuncionario()
            novoFuncionario.mostrarInfo()
            const horas = novoFuncionario.calculoDeHoras(Number(prompt('Horas trabalhadas: ')))
            console.log(`Valor à receber -> R$${horas}`);
            break
        case 2:
            const novoGerente = criarGerente()
            novoGerente.mostrarInfo()
            const bonus = novoGerente.calculoBonificacao()
            console.log(`O valor da bonificação é = R$${bonus}`);
            break
        case 3:
            const novoDiretor = criarDiretor()
            novoDiretor.mostrarInfo()
            novoDiretor.calcularGratificacao()
            console.log(`Valor da bonificação é = R$${novoDiretor.pll}%`);
            break
        case 4:
            const novoDono = criarDono()
            novoDono.mostrarInfo()
            novoDono.investir(Number(prompt('Informe o valor do investimento -> ')))
            novoDono.retirarLucro(Number(prompt('Informe o valor que será retirado -> ')))
            break
        case 0:
            flag = false
            break
        default:
            console.log('Opção inválida!');
            break
    }
}

