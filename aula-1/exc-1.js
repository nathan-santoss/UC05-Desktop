import promptSync from 'prompt-sync'
const prompt = promptSync()
let flag = true
let lampada = {
    potencia: "10w",
    situacao: 'OFF',
    ligar: () => {
        this.situacao = 'ON'
        console.log(`A lampada foi ligada!`);
    },
    desligar: () => {
        this.situacao = 'OFF'
        console.log(`A lampada foi desligada!`);
    }
}

while(flag){ 
    console.log(`
        [==== MENU ===]                   (LÂMPADA --> ${lampada.situacao})
        [1] Ver Potencia;
        [2] Ligar lampada
        [3] Desligar lampada
        [0] Sair`);
    let escolha = Number(prompt('--> '))
    console.clear()
    switch(escolha){
        case 1:
            console.log(`Potência da lampada -> ${lampada.potencia}`);
            break
        case 2:
            if(lampada.situacao === 'ON'){console.log(`A LÂMPADA JÁ ESTÁ LIGADA!`);}
            else{lampada.situacao = 'ON'}
            break
        case 3:
            if(lampada.situacao === 'OFF'){console.log(`A LÂMPADA JÁ ESTÁ DESLIGADA!`);}
            else{lampada.situacao = 'OFF'}
            break
        case 0:
            flag = false
            break
        default:
            console.log(`OPÇÃO INVÁLIDA!`);
            break
    }
}