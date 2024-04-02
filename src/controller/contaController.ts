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
      console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encontrada!", colors.reset);
    }
  }

  listarTodas(): void {
    for(let conta of this.listaContas){
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(colors.fg.green, "\n Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if(buscaConta != null){
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(colors.fg.green, "\nA conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
    }else{
      console.log(colors.fg.red, "\nA conta numero: " + conta.numero + " não foi econtrada!", colors.reset);
    }
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if(buscaConta != null){
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(colors.fg.greenstrong, "\nA conta numero " + numero + " foi apagada com sucesso!", colors.reset);
    }else{
      console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encotrada!", colors.reset);
    }
  }

  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
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