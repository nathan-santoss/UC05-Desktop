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
            novoFuncionario.calculoDeHoras()
            novoFuncionario.calcularSalario()
            novoFuncionario.gerarContraCheque()
            break
        case 2:
            const novoGerente = criarGerente()
            
            break
        case 3:
            const novoDiretor = criarDiretor()
           
            break
        case 4:
            const novoDono = criarDono()
           
            break
        case 0:
            flag = false
            break
        default:
            console.log('Opção inválida!');
            break
    }
}

