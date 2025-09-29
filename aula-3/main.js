import promptSync from 'prompt-sync'
const prompt = promptSync()
import { computadores, inicializar } from './function.js'
import { programas } from './class.js'

let flag = true

while(flag){
    console.log(`
        [---------- MENU ----------]
        [1] - Criar computador
        [2] - Testar componentes
        [0] - Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            inicializar() 
            break
        case 2:
            if(computadores.length < 2){console.log(`É necessário criar 2 computadores para prosseguir neste passo!`);}
            else{
                
                console.log(`Selecione um computador:`);
                computadores.forEach((pc,i) => {
                    console.log(`
                        [${i+1}] - ${pc.marca}/${pc.modelo}`);
                });
                let pc = Number(prompt('--> '))
                console.log(`
                    Qual funcionalidade deseja executar? (execute primeiro o computador)
                    [1] - Memoria
                    [2] - Processador
                    [3] - Armazenamento
                    [4] - Tela
                    [5] - Computador
                    [0] - Sair`);
                let escolha = Number(prompt('--> '))
                switch(escolha-1){
                    case 1:
                        computadores[pc].memoria.usarMemoria(programas)
                        computadores[pc].memoria.liberarMemoria(programas)
                        break
                    case 2:
                        computadores[pc].processador.executar(programas)
                        break
                    case 3:
                        computadores[pc].armazenamento.espacoLivre()
                        break
                    case 4:
                        let reset = true
                        while(reset){
                            const acoes = Number(prompt('[1] LIGAR || [2] DESLIGAR (aperte 0 para sair) --> '))
                            switch(acoes){
                                case 1:
                                    computadores[pc].tela.ligar()
                                    break
                                case 2:
                                    computadores[pc].tela.desligar()
                                    break
                                case 0:
                                    reset = false
                                    break
                                default:
                                    console.log('Opção inválida!');
                                    break
                            }
                        }
                    case 5:
                        let loop = true
                        while(loop){
                            console.log(`
                                Selecione uma das opções:
                                [1] - Imprimir Config
                                [2] - Instalação de Softwares
                                [3] - Remover Softwares
                                [4] - Ligar o pc
                                [5] - Desligar o pc
                                [0] - Sair`);
                            const select = Number(prompt('--> '))
                            switch(select){
                                case 1:
                                    computadores[pc].imprimir()
                                    break
                                case 2:
                                    computadores[pc].instalarsoft(programas)
                                    break
                                case 3:
                                    break
                                case 4:
                                    computadores[pc].ligar()
                                    break
                                case 5:
                                    computadores[pc].desligar()
                                    break
                                case 0:
                                    loop = false
                                    break
                            }
                        }                
                }
            }
            break
        case 0:
            flag = false
            break
        default:
            console.log(`OPÇÃO INVÁLIDA!`);
    }
}