import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/contaRepository";

export class contaController implements ContaRepository{

  private listaContas: Array<Conta> = new Array<Conta>();

  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    throw new Error("Method not implemented.");
  }

  listarTodas(): void {
    for(let conta of this.listaContas){
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("Cadastro feito com sucesso!")
  }

  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }

  deletar(numero: number): void {
    throw new Error("Method not implemented.");
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
  
}