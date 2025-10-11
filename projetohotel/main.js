import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { criarHotel } from "./classes/local/Hotel.js"
const hotel = criarHotel()
let flag = true
while(flag){
    console.log(`
        [--- BEM VINDOS AO HOTEL ${hotel.nome} ---]
        Você é:
        [1] Cliente;
        [2] Funcionário;
        [0] Encerrar;`);
    const op = Number(prompt('-> '))
    switch(op){
        case 1:
            break
        case 2:
            hotel.adicionarQuarto()
            hotel.listarDisponiveis()
            break
        case 0:
            flag = false
            break

    }
}