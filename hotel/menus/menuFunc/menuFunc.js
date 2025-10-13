import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { criarFuncionario, autenticar, checarDisp } from "./function.js"

export const menuFunc = (hotel) => { 
    let flag = true
    let funcionarioAutenticado
    while(flag){
        console.log(`
            [-------- ADMINISTRAÇÃO --------]
            [1] - Login;
            [2] - Cadastrar Funcionários;
            [0] - Voltar`);
        const op = Number(prompt('->')) 
        switch(op){
            case 1:
                if(!funcionarioAutenticado){
                    funcionarioAutenticado = autenticar(hotel.funcionarios)
                }else{
                    fluxoLogin(hotel)
                }
                break
            case 2:
                const colaborador = criarFuncionario(hotel.funcionarios)
                hotel.funcionarios.push(colaborador)
                console.log('Funcionário cadastrado!');
                break
            case 0:
                flag = false
                break
                
        }
    
    }
}

const fluxoLogin = (hotel) => {
    let reset = true
    while(reset){
        console.log(`
            [------ Menu Administrativo ------]
            [1] - Adicionar quarto;
            [2] - Reservar quarto;
            [3] - Listar quartos disponíveis;
            [4] - Próximas Reservas;
            [5] - Cancelar Reserva;
            [6] - Consultar reserva;
            [0] - Logout;`);
        const select = Number(prompt('-> '))
        switch(select){
            case 1:
                let num_quarto = parseInt(prompt('Informe o número do novo quarto: '))
                const cat = prompt('Categoria (LUXO ou BÁSICO) -> ')
                hotel.adicionarQuarto(num_quarto, cat)
                break
            case 2:
                let quarto = parseInt(prompt('Informe o número do quarto desejado: '))
                let mes = parseInt(prompt('Informe o mês (em numeral): '))-1
                let dia = parseInt(prompt('Dia: '))
                let ano = 2025
                let dataEscolhida = new Date(ano, mes, dia)
                let ocupado = checarDisp(hotel.reservas,dataEscolhida, quarto)
                if(ocupado){throw new Error('Erro: O quarto está ocupado!')}
                else{
                    let quartoEscolhido = hotel.quartos.find(q => q.num === quarto)
                    hotel.reservarQuarto(quartoEscolhido, dataEscolhida)
                }
                break
            case 3:
                let mesSelecionado = parseInt(prompt('Informe o mês (em numeral): '))-1
                let diaSelecionado = parseInt(prompt('Dia: '))
                let anoSelecionado = 2025
                const data = new Date(anoSelecionado, mesSelecionado, diaSelecionado)
                hotel.mostrarDisponiveis(data)
                break     
            case 4:
                hotel.listarReservas()       
                break
            case 5:
                let numCancelado = parseInt(prompt('Informe o número do quarto: '))
                let dataCancelado = prompt('Informe a DATA da reserva: ')
                let clienteCancelado = prompt('Nome do cliente: ').toUpperCase()
                cancelarReserva(numCancelado, dataCancelado, clienteCancelado)
                break
            case 6:
                break
            default:
                console.log('Opção inválida!');
                break
        }
    }
}