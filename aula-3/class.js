import promptSync from 'prompt-sync'
const prompt = promptSync()
export let programas = []
export class Memoria {
  #tipo;
  #frequencia;
  #capacidade;
  constructor(tipo, frequencia, capacidade){
    this.#tipo = tipo
    this.#frequencia = frequencia
    this.#capacidade = capacidade
    this.emUso
  }
  get tipo(){return this.#tipo}
  get frequencia(){return this.#frequencia}
  get capacidade(){return this.#capacidade}
  set tipo(item){
    if(item !== this.#tipo){
      this.#tipo = item
    } else { console.log('O item já está inserido!'); }
  }
  set frequencia(num){
    if(num !== this.#frequencia && num > 0){
      this.#frequencia = num.toFixed(1)
    } else { console.log('Valor inválido!'); }
  }
  set capacidade(tamanho){
    if(tamanho !== this.#capacidade && tamanho > 0){
      this.#capacidade = parseInt(tamanho)
    }
  }
  usarMemoria(programas){
    if(programas.length < 1){console.log('NÃO EXISTE SOFTWARES INSTALADOS');}
    else{
      console.log(`Selecione um dos programas para executar: `);
      programas.forEach((soft, i) => {
          console.log(`
              [${i}] - ${soft.nome} `);
      });
      let selecionado = Number(prompt('--> '))
      selecionado = programas.at(selecionado)
      this.emUso = selecionado.consumo_ram
      console.log(`
          Executando ${selecionado.nome}
          Memoria em uso ${selecionado.consumo_ram} Mbps
          Livre -> ${this.capacidade - selecionado.consumo_ram}`);
    }
    
  }
  liberarMemoria(programas){
    console.log(`
        [---------- LIBERAÇÃO DE MEMÓRIA ----------]
        ${(this.#capacidade - this.emUso)} Mbps Liberados!`);
  }
}


export class Processador {
  #marca;
  #modelo;
  #nucleo
  #velocidade
  constructor(marca,modelo,nucleo,velocidade){
    this.#marca = marca
    this.#modelo = modelo
    this.#nucleo = nucleo
    this.#velocidade = velocidade
  }
  get marca(){return this.#marca}
  get modelo(){return this.#modelo}
  get nucleo(){return this.#nucleo}
  get velocidade(){return this.#velocidade}
  executar(programas){
    if(programas.length < 1){console.log('Sem programas instalados!');}
    else{
      programas.forEach(soft => {
        console.log(`
            Executando - ${programas.nome} || ${programas.peso} Mbps`);
      });
    }
  }
}


export class Armazenamento {
  #tipo;
  #capacidade
  #espaco_utilizado
  constructor(tipo,capacidade){
    this.#tipo = tipo
    this.#capacidade = capacidade
    this.#espaco_utilizado = 0
  }
  get espaco_utilizado(){return this.#espaco_utilizado}
  get tipo(){return this.#tipo}
  get capacidade(){return this.#capacidade}
  set espaco_utilizado(novoEspaco){
    this.#espaco_utilizado = novoEspaco
  }
  espacoLivre(){
    console.log(`${this.tipo} => ${this.capacidade - this.espaco_utilizado} livre`);
  }
}


export class Tela{
  #tamanho
  #resolucao
  #status
  constructor(tamanho, resolucao){
    this.#tamanho = tamanho
    this.#resolucao = resolucao
    this.#status = "OFF"
  }
  ligar(){
    this.#status = 'ON'   
    console.log('A TELA FOI LIGADA!'); 
  }
  desligar(){
    this.#status = 'OFF'  
    console.log('TELA DESLIGADA!');   
  }
  get status(){
    if(this.#status === 'OFF'){console.log('A tela está desligada!');}
    else{console.log('A tela está ligada!');}
  }
  set status(valor){console.log(`Comando inválido!`);}
  get tamanho(){return this.#tamanho}
  set tamanho(valor){
    if(valor > 0 && valor !== this.#tamanho){
      this.#status = valor
    }else{console.log('Opção inválida!');}
  }
  get resolucao(){return this.#resolucao}
  set resolucao(valor){
    if(valor.length > 0){
      this.#resolucao = valor
    }else{console.log('Opção inválida!');}
  }
}


export class Computador {
  #marca
  #modelo
  constructor(marca,modelo, memoria, processador, armazenamento, tela){
    this.#marca = marca
    this.#modelo = modelo
    this.memoria = memoria
    this.processador = processador
    this.armazenamento = armazenamento 
    this.tela = tela
    this.status = 'OFF'
  }
  get marca(){return this.#marca.toUpperCase()}
  get modelo(){return this.#modelo.toUpperCase()}
  set marca(novaMarca){
    if(isNaN(Number(novaMarca)) || novaMarca.trim() !== ''){
      this.#marca = novaMarca
    }
    else{console.log('Não é possível adicionar essa marca!');}
  }
  set modelo(novoModelo){
    if(isNaN(Number(novoModelo)) || novoModelo.trim() !== ''){
      this.#modelo = novoModelo
    }
  }
  imprimir(){
    console.clear()
    console.log(`
        [------- FICHA TÉCNICA: ${this.marca} ${this.modelo}-------]
        Processador -> Marca: ${this.processador.marca} || Modelo: ${this.processador.modelo}
        Memoria -> Frequencia: ${this.memoria.frequencia} || Capacidade: ${this.memoria.capacidade}
        Armazenamento -> Tipo: ${this.armazenamento.tipo} || Livre: ${this.armazenamento.capacidade}
        Tela -> Tamanho: ${this.tela.tamanho} || Resolução: ${this.tela.resolucao}`);
  }
  instalarsoft(listaDeSoftwares){
    if(this.status === 'OFF'){console.log('Não foi possível prosseguir. LIGUE O COMPUTADOR!');}
    else{
      let armEmUso = 0
      let flag = true
      while(flag){
        console.log(`
            [-------- INSTALAÇÃO DE SOFTWARE -------- ]`);
        const nome = prompt('Informe o software -> ')
        const peso = Number(prompt('Tamanho -> '))
        const consumo = Number(prompt('Consumo -> '))
        let novoSoft = new Software (nome,peso,consumo)
        armEmUso += peso
        if(armEmUso <= this.armazenamento.capacidade){
          listaDeSoftwares.push(novoSoft)
          console.log('Software INSTALADO!');
          this.armazenamento.espaco_utilizado += novoSoft.peso
          let repetir = Number(prompt('Instalar novo programa? [1] SIM ou [2] NÃO => '))
          switch(repetir){
              case 1:
                  break
              case 2:
                  flag = false
                  break
          }
        }
        else{
          console.log('NÃO FOI POSSÍVEL PROSSEGUIR COM A INSTALAÇÃO');
          flag = false
        }
      }
    }
  }
  listarSoft(listaDeSoftwares){
    if(this.status === 'OFF'){console.log('Não foi possível prosseguir. LIGUE O COMPUTADOR!');}
    else{
      console.log(`
          [-------- SOFTWARES INSTALADOS -------- ]`);
      listaDeSoftwares.forEach(soft => {
        console.log(`
            Nome -> ${soft.nome}
            Espaço -> ${soft.peso}
            Consumo de RAM -> ${soft.consumo_ram}`);
      });
      console.log(`
          CAPACIDADE CONSUMIDA -> ${this.armazenamento.espaco_utilizado} gb's
          Disponível -> ${this.armazenamento.capacidade - this.armazenamento.espaco_utilizado}`);
    }
  }
  ligar(){
    if(this.status === 'OFF'){
      this.status = 'ON'
      console.log(`O computador está ligado!`);
    }
    else{
      console.log(`O computador está ligado!`);
    }
  }
  desligar(){
    if(this.status === 'OFF'){
      this.status = 'ON'
      console.log('O computador foi desligado!');
    }else{
      console.log('O computador já está desligado!');
    }
  }
}

export class Software {
  constructor(nome, peso, consumo_ram){
    this.nome = nome
    this.peso = peso
    this.consumo_ram = consumo_ram
  }
}