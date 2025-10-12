import PromptSync from "prompt-sync"
const prompt = PromptSync()
import { hotel } from "../../index.js"
import { criarFuncionario, autenticar, checarDisp } from "./function.js"

const menuFunc = (hotel) => { 
    let flag = true
    while(flag){
        console.log(`
            [-------- ADMINISTRAÇÃO --------]
            [1] - Login;
            [2] - Cadastrar Funcionários;
            [0] - Voltar`);
        const op = Number(prompt('->')) 
        switch(op){
            case 1:
                const funcionario = autenticar(hotel.funcionarios)

            case 2:
                const colaborador = criarFuncionario(hotel.funcionarios)
                hotel.funcinarios.push(colaborador)
                console.log('Funcionário cadastrado!');
                break
            case 0:
                flag = false
                break
                
        }
    
    }
}

const fluxoLogin = (hotel) => {
    console.log(`
        [------ Menu Administrativo ------]
        [1] - Adicionar quarto;
        [2] - Listar quartos disponíveis;
        [3] - Próximas Reservas;
        [4] - Cancelar Reserva;
        [5] - Consultar reserva;
        [0] - Logout;`);
    const select = Number(prompt('-> '))
    switch(select){
        case 1:
            let num_quarto = parseInt(prompt('Informe o número do novo quarto: '))
            const cat = prompt('Categoria (LUXO ou BÁSICO) -> ')
            hotel.adicionarQuarto(num_quarto, cat)
            break
        case 2:
            let mesSelecionado = parseInt(prompt('Informe o mês (em numeral): '))-1
            let diaSelecionado = parseInt(prompt('Dia: '))
            let anoSelecionado = 2025
            const data = new Date(anoSelecionado, mesSelecionado, diaSelecionado)
            hotel.mostrarDisponiveis(data)
            let quarto = parseInt(prompt('\nInforme o número do quarto desejado: '))
            let ocupado = checarDisp(hotel.reservas,data, quarto)
            if(ocupado){throw new Error('Erro: O quarto está ocupado!')}
            else{
                quarto = hotel.quartos.find(quarto => quarto.num === quarto)
                reservarQuarto(quarto, data)
            }
            break            
    }
}