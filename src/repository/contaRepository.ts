import { Conta } from "../model/conta";

export interface ContaRepository {

  // Métodos do CRUD: create - read - update - delete
	procurarPorNumero(numero: number): void;
  listarTodas(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;
	
	// Métodos Bancários
	sacar(numero: number, valor: number): void;
	
  depositar(numero: number, valor: number): void;
	
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
	
}
