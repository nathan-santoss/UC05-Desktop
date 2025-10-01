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
            const horas_f = novoFuncionario.calculoDeHoras(Number(prompt('Horas trabalhadas: ')))
            console.log(`Valor à receber -> R$${horas_f}`);
            break
        case 2:
            const novoGerente = criarGerente()
            novoGerente.mostrarInfo()
            const horas_g = novoGerente.calculoDeHoras(Number(prompt('Horas trabalhadas: ')))
            console.log(`Valor à receber -> R$${horas_g}`);
            novoGerente.calculoBonificacao()
            break
        case 3:
            const novoDiretor = criarDiretor()
            novoDiretor.mostrarInfo()
            const horas_D = novoDiretor.calculoDeHoras(Number(prompt('Horas trabalhadas: ')))
            console.log(`Valor à receber -> R$${horas_D}`);
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

