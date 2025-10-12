import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { Hotel } from "./class/local/Hotel.js"
import { menuFunc } from './menus/menuFunc/menuFunc.js'
const hotel = new Hotel(nome)
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
            menuFunc(hotel)
            break
    }
    
}
