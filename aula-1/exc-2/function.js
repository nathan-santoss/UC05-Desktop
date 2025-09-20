
export const meses = [
    ['Janeiro', 31],
    ['Fevereiro', 28],
    ['Março', 31],
    ['Abril', 30],
    ['Maio', 31],
    ['Junho', 30],
    ['Julho', 31],
    ['Agosto', 31],
    ['Setembro', 30],
    ['Outubro', 31],
    ['Novembro', 30],
    ['Dezembro', 31]
]
export class Data{
    constructor(dia,mes,ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }
    escreverData = () => {
        meses.forEach((data, i) => {
            if(this.mes === i+1){
                console.log(`A data é dia ${this.dia} de ${data[0]} de ${this.ano}`);
            }
        });
    }
    escreverMes = () => {
        meses.forEach((data, i) => {
            if(i+1 === this.mes){
                console.log(`O Mês atual é => ${data[0]}`);
            }
        });
    }
    fimDoAno = () => {
        const diastotais = 365
        let diasPassados = 0
        meses.forEach((datas, i) => {
            if(i+1 < this.mes){ // teste para saber se o mês atual é menor (antes) que do usuário
                diasPassados += datas[1] // se sim, significa que já passou esse mês
                // somo os dias daquele mês que passou ao total de dias passados
            }
            else if(this.mes === i+1){ // caso seja o mesmo mês
                diasPassados += this.dia // vejo quantos dias o mes tem e substrai pelo que já passou 
                // depois soma ao total de dias passados
            }
        });
        const diasFaltando = diastotais - diasPassados // já sabendo o total de dias passados, é só subtrair pelo ano
        console.log(`Hoje faltam ${diasFaltando} para acabar o ano`);
    }
}