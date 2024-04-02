import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/contaRepository";
import { colors } from "../util/colors";

export class contaController implements ContaRepository{

  private listaContas: Array<Conta> = new Array<Conta>();
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if(buscaConta != null){
      buscaConta.visualizar();
    }else{
      console.log(colors.bg.red, colors.fg.redstrong, "A conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
  }

  listarTodas(): void {
    
    for(let conta of this.listaContas){
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("\n")
    console.log(colors.bg.greenbright, colors.fg.greenstrong, conta.numero + "° conta criada com sucesso!", colors.reset);
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if(buscaConta != null){
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(colors.bg.greenbright, colors.fg.greenstrong,"A conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
    }else{
      console.log(colors.bg.red, colors.fg.redstrong, "A conta numero: " + conta.numero + " não foi econtrada!", colors.reset);
    }
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if(buscaConta != null){
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(colors.bg.greenbright, colors.fg.greenstrong, "A conta numero " + numero + " foi apagada com sucesso!", colors.reset);
    }else{
      console.log(colors.bg.red, colors.fg.redstrong,"A conta numero: " + numero + " não foi encotrada!", colors.reset);
    }
  }

  sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if(conta != null){

      if(conta.sacar(valor) == true){
        console.log(colors.bg.greenbright, colors.fg.greenstrong, "O SAque na conta numero: " + numero + " foi efetuado com sucesso!", colors.reset);
      }else{
        console.log(colors.bg.red, colors.fg.redstrong,"A conta numero: " + numero + " não foi encontrada!", colors.reset);
      }
    }

    
  }

  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if(conta != null){
      conta.depositar(valor);
      console.log(colors.bg.green, colors.fg.greenstrong,"O depósito na conta numero: " + numero + " foi efetuado com sucesso!", colors.reset);
    }else{
      console.log(colors.bg.red, colors.fg.redstrong,"A conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if(contaOrigem != null && contaDestino != null){
      if(contaOrigem.sacar(valor) == true){
        contaDestino.depositar(valor);
        console.log(colors.bg.greenbright, colors.fg.greenstrong,"A transferência da conta número: " + numeroOrigem + " para a conta número: " + numeroDestino + " foi efetuada com sucesso!", colors.reset);
      }
    }else{
      console.log(colors.bg.red, colors.fg.redstrong,"A conta número: " + numeroOrigem + " e/ou a conta número: " + numeroDestino + " não foram encontradas!", colors.reset);
    }
  }

  //Gerar número da conta
  public gerarNumero(): number{
    return ++ this.numero;
  }

  //Checar se uma conta existe
  public buscarNoArray(numero: number): Conta | null{

    for (let conta of this.listaContas){
       if(conta.numero === numero)
          return conta;
    }

    return null;
  }
  
}