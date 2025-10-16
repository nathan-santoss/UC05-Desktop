import PromptSync from "prompt-sync"
const prompt = PromptSync()
import path from 'path'
import { readFileSync } from "fs"
import { criarFuncionario, autenticar, checarDisp, checarQuartoExistente, normalizaData } from "./function.js"
import { criarCliente } from "../menuCliente/functions.js"
export const menuFunc = (hotel, hoje) => { 
    let flag = true
    while(flag){
        console.log(`
            [-------- ADMINISTRAÇÃO --------]
            [1] - Entrar no Sistema;
            [2] - Cadastrar Funcionários;
            [0] - Voltar`);
        const op = Number(prompt('->'))
        console.clear()
        switch(op){
            case 1:
                try{
                    let funcionarioAutenticado = autenticar(hotel.funcionarios)
                    if(!funcionarioAutenticado){throw new Error("Erro: Dados inválidos!");}
                    else{
                        fluxoLogin(hotel, hoje)
                    }
                }catch(e){
                    console.error(e.message)
                }
                break
            case 2:
                try {
                    const colaborador = criarFuncionario(hotel.funcionarios)
                    hotel.funcionarios.push(colaborador)
                    console.log('Funcionário cadastrado!');
                }catch (e) {
                    console.error(e.message)
                }
                break
            case 0:
                flag = false
                break
                
        }
    
    }
}

const fluxoLogin = (hotel, hoje) => {
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
            [7] - Gerar Relatório;
            [0] - Logout;`);
        const select = Number(prompt('-> '))
        console.clear()
        switch(select){
            case 1:
                let num_quarto = parseInt(prompt('Informe o número do novo quarto: '))
                const cat = prompt('Categoria (LUXO ou BÁSICO) -> ')
                const existe = checarQuartoExistente(hotel.quartos, num_quarto)
                if(existe){throw new Error('Erro: O quarto já existe no sistema')}
                hotel.adicionarQuarto(num_quarto, cat)
                break
            case 2:
                let quarto = parseInt(prompt('Informe o número do quarto desejado: '))
                const quartoValido = checarQuartoExistente(hotel.quartos, quarto)
                if(!quartoValido){throw new Error('Erro: O quarto não existe no sistema.')}
                let mes = parseInt(prompt('Informe o mês (em numeral): '))-1
                let dia = parseInt(prompt('Dia: '))
                let ano = 2025
                let dataEscolhida = new Date(ano, mes, dia)
                if(normalizaData(dataEscolhida).getTime() < normalizaData(hoje).getTime()){throw new Error('Erro: Não é possível agendar dadas passadas!')}
                let ocupado = checarDisp(hotel.reservas,dataEscolhida, quarto)
                if(ocupado){throw new Error('Erro: O quarto está ocupado!')}
                else{
                    let quartoEscolhido = hotel.quartos.find(q => q.numero === quarto)
                    let novoCliente = criarCliente(hotel)
                    hotel.reservarQuarto(quartoEscolhido, dataEscolhida, novoCliente, hoje)
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
                hotel.listarReservas(hoje)       
                break
            case 5:
                
                let numCancelado = parseInt(prompt('Informe o número do quarto: '))
                let mesCancelado = parseInt(prompt('Informe o mês (em numeral): '))-1
                let diaCancelado = parseInt(prompt('Dia: '))
                let anoCancelado = 2025
                const dataCancelado = new Date(anoCancelado,mesCancelado,diaCancelado)
                if(normalizaData(dataCancelado).getTime() < normalizaData(hoje).getTime()){throw new Error('Erro: Não é possível cancelar dadas passadas!')}
                let clienteCancelado = prompt('Nome do cliente: ').toUpperCase()
                hotel.cancelarReserva(numCancelado, dataCancelado, clienteCancelado)
                break
            case 6:
                hotel.detalharReserva()
                break
            case 7:
                hotel.gerarRelatorio()
                break
            case 0:
                reset = false
                break
            default:
                console.log('Opção inválida!');
                break
        }
    }
}