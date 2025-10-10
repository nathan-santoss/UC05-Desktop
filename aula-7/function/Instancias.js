import { Cliente } from "../classes/Cliente.js"
import { Quarto } from "../classes/Quarto.js";
import promptSync from 'prompt-sync'
import { Reserva } from "../classes/Reserva.js";
const prompt = promptSync()



const criarCliente = () =>{
    const nome = prompt('Informe seu nome: ').toUpperCase()
    const cpf = prompt('CPF: ')
    console.log('Número para contato.');
    const contato = prompt('Digite apenas números: ')
    const novoCliente = new Cliente(nome, cpf, contato)
    return novoCliente
}

export const criarQuarto = () => {
    console.log(`
        [-------- Criando quartos --------]`);
    const nQuarto = Number(prompt('Informe o número do quarto: '))
    const cat = prompt('Categoria (LUX) ou (BSC): ')
    const novoQuarto = new Quarto(nQuarto, cat)
    return novoQuarto
}
export const criarReserva = (arrayQuartos) => {
    if(arrayQuartos.length <= 0){ throw new Error('Erro: Não foram criados quarto até o momento!')}
    const cliente = criarCliente()
    const livres = arrayQuartos.filter(quarto => quarto.status === true)
    console.log('Selecione um dos quartos disponíveis');
    livres.forEach((quarto, i) => {
        console.log(`
            [======= Disponíveis =======]
            Quarto N° ${quarto.numQuarto}`);
    });
    const select_quarto = Number(prompt('Selecione número do quarto desejado: '))
    const novaReserva = new Reserva(, cliente)
    
}
