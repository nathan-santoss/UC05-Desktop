import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { checarExistenciaCliente, criarCliente } from "./functions.js"
import { checarDisp, checarQuartoExistente } from "../menuFunc/function.js"

export const menuCliente = (hotel, hoje) => {
    let flag = true
    while(flag){
        console.log(`
            [------ Menu Cliente ------]
            [1] - Login
            [2] - Cadastro`);
        const op = parseInt(prompt('-> '))
        switch(op){
            case 1:
                try{
                    if(hotel.clientes.length === 0){throw new Error('Erro: Não existem clientes cadastrados!')}
                    const cpf = Number(prompt('Informe seu CPF: '))
                    let autenticado = hotel.clientes.some(cliente => cliente.cpf === cpf)
                    if(!autenticado){throw new Error('O cliente não existe!')}
                    const cliente = hotel.clientes.find(c => c.cpf === cpf)
                    fluxodeLoginCliente(hotel, cliente, hoje)
                }catch(e){
                    console.error(e.message)
                }
                break
            case 2:
                try {
                    const novoCliente = criarCliente(hotel)
                } catch (e) {
                    console.error(e.message)
                }
                break
            case 0:
                flag = false
                break
            default:
                console.log('Opção inválida!');
                break
        }
    }
}

const fluxodeLoginCliente = (hotel, cliente, hoje) => {
    let reset = true
    while(reset){
        console.log(`
            [------ Menu ------]
            [1] - Reservar quarto;
            [2] - Cancelar reserva;
            [3] - Visualizar suas reservas;
            [0] - Sair`);
        const select = parseInt(prompt('-> '))
        switch(select){
            case 1:
                let quarto = parseInt(prompt('Informe o número do quarto desejado: '))
                const quartoValido = checarQuartoExistente(hotel.quartos, quarto)
                if(!quartoValido){throw new Error('Erro: O quarto não existe no sistema.')}
                let mes = parseInt(prompt('Informe o mês (em numeral): '))-1
                let dia = parseInt(prompt('Dia: '))
                let ano = 2025
                let dataEscolhida = new Date(ano, mes, dia)
                if(dataEscolhida.getTime() < hoje.getTime()){throw new Error('Erro: Não é possível agendar dadas passadas!')}
                let ocupado = checarDisp(hotel.reservas,dataEscolhida, quarto)
                if(ocupado){throw new Error('Erro: O quarto está ocupado!')}
                else{
                    let quartoEscolhido = hotel.quartos.find(q => q.numero === quarto)
                    hotel.reservarQuarto(quartoEscolhido, dataEscolhida, cliente)
                }
                break
            case 2:
                let numCancelado = parseInt(prompt('Informe o número do quarto: '))
                let mesCancelado = parseInt(prompt('Informe o mês (em numeral): '))-1
                let diaCancelado = parseInt(prompt('Dia: '))
                let anoCancelado = 2025
                const dataCancelado = new Date(anoCancelado,mesCancelado,diaCancelado)
                if(dataCancelado.getTime() < hoje.getTime()){throw new Error('Erro: Não é possível cancelar dadas passadas!')}
                let clienteCancelado = cliente.nome
                hotel.cancelarReserva(numCancelado, dataCancelado, clienteCancelado)
                break
            case 3:
                const reservasDoCliente = hotel.reservas.filter(reserva => {
                    if(reserva.cliente.nome === cliente.nome){
                        return reserva
                    }
                })
                if(reservasDoCliente.length === 0){throw Error('O cliente não possui reservas.')}
                reservasDoCliente.forEach(r => {
                    if(r.data.getTime() >= hoje.getTime()){
                        console.log(`
                            Data -> ${r.data.toLocaleDateString('pt-BR')}
                            Nome: ${r.cliente.nome}
                            CPF: ${r.cliente.cpf}
                            Quarto -> N°${r.quarto.numero} (${r.quarto.categoria})
                            -----------------------------`);
                    }
                });
                console.log('[--------- FIM DA LISTA ---------]');
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