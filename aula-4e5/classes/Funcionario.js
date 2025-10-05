import { Pessoa } from "./Pessoa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Funcionario extends Pessoa{
    #salario
    #matricula
    #horasExtras
    #bonus
    constructor(nome,cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia){
        super(nome, cpf, nascimento)
        this.hierarquia = hierarquia
        this.cargo = cargo
        this.salario = salario
        this.matricula = matricula
        this.valorHora = valorHora
        this.horasExtras = 0
        this.extra = 0
        this.inss = 0
        this.desconto = 0
        this.liquido = 0
        this.bonus = 0
    }
    //==== getters====
    get salario(){return this.#salario}
    get matricula(){return this.#matricula}
    get horasExtras(){return this.#horasExtras}
    get bonus(){return this.#bonus}

    //=== setters===
    set salario(valor){
        if(valor > 0 && !isNaN(valor)){
            this.#salario = Number(valor.toFixed(2))
            console.log('Salario registrado com sucesso!');
        }
        else{
            console.log('Salário inválido!');
            this.#salario = 'Não informado'
        }
    }
    set matricula(valor){
        if(valor > 0 && !isNaN(valor)){
            this.#matricula = parseInt(valor)
            console.log('Matricula registrada com sucesso!');
        }
    }
    set horasExtras(valor){
        if(valor >= 0 && !isNaN(valor)){
            this.#horasExtras = parseInt(valor)
            console.log('Horas extras registradas com sucesso!');
        }
    }
    set bonus(valor){
        if(valor >= 0 && !isNaN(valor)){
            this.#bonus = Number(valor.toFixed(2) )
        }
    }
    //==== métodos ====
    calcularHorasExtras(horas){
        const total = horas * this.valorHora
        console.log(`
            Deseja registrar essas horas no banco do funcionário? 
            [1] Sim ou [2] Não`);
        const decision = Number(prompt('--> '))
        switch(decision){
            case 1:
                this.horasExtras = horas
                this.extra = Number(total.toFixed(2))
                break
            case 2:
                console.log(`
                    Caso o ${this.cargo} faça ${horas} horas extras:
                    Valor a receber -> R$${total.toFixed(2)}`);
                break
            default:
                console.log('Opção inválida!');
                break
        }      
    
    }
    calcularSalario(){
        if(this.hierarquia === 'DIRETOR' || this.hierarquia === 'GERENTE'){
            switch(this.hierarquia){
                case 'GERENTE':
                    if(this.horasExtras > 0){this.inss = 12/100}
                    else{this.inss = 9/100}

                    if(this.qtde_equipe >= 10){
                        this.bonus = this.salario * 15/100
                    }
                    else{this.bonus = this.salario * 7/100}
                break
                case 'DIRETOR':
                    console.log('Diretor apto à Bonificação? [1] SIM ou [2] NÃO');
                    this.apto = Number(prompt('--> '))
                    switch (this.apto){
                        case 1:
                            this.apto = true
                            this.tempoGestao = Number(prompt('Informe o tempo de gestão(em anos): '))

                            if(this.tempoGestao < 5 && this.tempoGestao >= 2){
                                this.bonus = this.salario * 25/100
                            }
                            else if(this.tempoGestao > 5){
                                this.bonus = this.salario * 30/100
                            }
                            else{this.bonus = this.salario * 20/100}
                        break;
                        //--------------------------------------------
                        case 2:
                            this.bonus = this.salario * 15/100
                        break
                    }
                    if(this.horasExtras > 0){this.inss = 14/100}
                    else if(this.horasExtras == 0){this.inss = 12/100}
                break
            }
        }
        else {
            if (this.horasExtras > 0) { this.inss = 9/100 }
            else { this.inss = 7.5/100 }
        }
        const bruto = this.salario + this.extra + this.bonus
        this.desconto = bruto * this.inss
        this.liquido = bruto - this.desconto
    }
    gerarContraCheque(){
        console.log(`
            [====== CONTRA CHEQUE ======]
            Salário base -> R$${Number(this.salario.toFixed(2))}
            Horas extras -> R$${this.extra} (${this.horasExtras} horas)
            Bruto -> R$${(Number(this.salario) + Number(this.extra) + Number(this.bonus)).toFixed(2)}
            INSS -> ${parseInt(this.inss*100)}%
            Descontos -> R$${Number(this.desconto.toFixed(2))}
            Líquido a receber = R$${Number(this.liquido.toFixed(2))}`);
    }
    mostrarInfo(){
        super.mostrarInfo()
        console.log(`
            Cargo -> ${this.cargo}
            Matricula -> ${this.matricula}
            Salário contratual -> R$${Number(this.salario.toFixed(2))}`);
    }
}
export const criarFuncionario = () => {
    const nome = prompt('Nome do funcionário: ').toUpperCase()
    const cpf = prompt('CPF: ')
    const nascimento = prompt('Data de nascimento: ')
    const cargo = prompt('Cargo do funcionário: ').toUpperCase()
    const valorHora = 15
    const hierarquia = 'FUNCIONÁRIO'
    const salario = Number(prompt('Salário contrátual: '))
    const matricula = Number(prompt('Matricula: '))
    const novoFuncionario = new Funcionario(nome, cpf,nascimento, cargo, salario, matricula, valorHora, hierarquia)
    return novoFuncionario
}