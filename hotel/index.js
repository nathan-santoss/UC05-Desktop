import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Hotel } from './class/local/Hotel.js';
import { menuFunc } from './menus/menuFunc/menuFunc.js';
export const hotel = new Hotel(prompt('Qual será o nome do hotel? '))
let flag = true
while(flag){
    console.log(`
        [--------- Bem-Vindos ao Hotel ${hotel.nome} ---------]
        Identifique-se:

        [1] - Administração;
        [2] - Cliente`);
    const op = Number(prompt('-> '))
    switch(op){
        case 1:
            try {
                menuFunc(hotel)
            } catch (e) {
                console.error(e.message)
            }
            break
    }
    
}
