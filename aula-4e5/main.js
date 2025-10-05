import PromptSync from "prompt-sync";
const prompt = PromptSync()
import { criarFuncionario } from "./classes/Funcionario.js";
import { criarGerente } from "./classes/Gerente.js";
import { criarDiretor } from "./classes/Diretor.js";
import { criarDono } from "./classes/Dono.js";

let flag = true
while(flag){
    console.log(`
        [==== Menu de Criação ====]
        Selecione uma das opções para criar:
        [1] Funcionário;
        [2] Gerente;
        [3] Diretor;
        [4] Dono;
        [0] Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            const funcionario = criarFuncionario()
            funcionario.calcularHorasExtras(Number(prompt('Informe o valor das horas extras: ')))
            funcionario.calcularSalario()
            funcionario.mostrarInfo()
            funcionario.gerarContraCheque()
            break
        case 2:
            const gerente = criarGerente()
            gerente.calcularHorasExtras(Number(prompt('Informe o valor das horas extras: ')))
            gerente.calcularSalario()
            gerente.mostrarInfo()
            gerente.gerarContraCheque()
            break
        case 3:
            const diretor = criarDiretor()
            diretor.calcularHorasExtras(Number(prompt('Horas extras: ')))
            diretor.calcularSalario()
            diretor.mostrarInfo()
            diretor.gerarContraCheque()
            break
        case 4:
            const dono = criarDono()
            dono.investir(Number(prompt('Valor para investir: ')))
            dono.mostrarInfo()
            dono.retirar(Number(prompt('retirar: ')))
            console.clear()
            dono.mostrarInfo()
            break
        case 0:
            flag = false
            break
        default:
            console.log('Opção inválida!');
            break
    }
}