import promptSync from 'prompt-sync'
const prompt = promptSync()
import { Cliente, iniciar } from './function.js'


let pessoas = []
let flag = true
while(flag){
    
    console.log(`
        [--------- MENU ---------]
        [1] Mostrar dados;
        [2] Alterar dados;
        [3] Adicionar Pessoa
        [0] Sair`
    )
    const op = Number(prompt('--> '))
    console.clear()
    flag = iniciar(op,pessoas,flag)   
}
