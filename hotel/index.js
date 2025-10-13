import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Hotel } from './class/local/Hotel.js';
import { menuFunc } from './menus/menuFunc/menuFunc.js';
import { menuCliente } from "./menus/menuCliente/menuClient.js";
export const hotel = new Hotel(prompt('Qual será o nome do hotel? '))
let flag = true
while(flag){
    const hoje = new Date()
    console.log(`
        [--------- Bem-Vindos ao Hotel ${hotel.nome} ---------]
        Identifique-se:

        [1] - Administração;
        [2] - Cliente
        [0] - Sair`);
    const op = Number(prompt('-> '))
    console.clear()
    switch(op){
        case 0:
            flag = false
            break
        case 1:
            menuFunc(hotel, hoje)
            break
        case 2:
            menuCliente(hotel, hoje)
            break
        default:
            console.log('Opção inválida!');
            break
    }
}
