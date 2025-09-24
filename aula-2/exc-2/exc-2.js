import promptSync from 'prompt-sync'
const prompt = promptSync()
import { menu } from './function.js';

let flag = true
let pessoas = []
while(flag){
    console.log(`
        [-------- MENU --------]
        [1] - Criar conta
        [2] - Depositar
        [3] - Sacar
        [4] - Calcular Rendimento
        [0] - Sair`);
    const select = Number(prompt('--> '))
    console.clear()
    flag = menu(select, pessoas, flag)
}