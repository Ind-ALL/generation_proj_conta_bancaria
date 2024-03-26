import { colors } from '../util/colors';


export class Conta{
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  // Método Construtor de Classe Conta

	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}


    // Métodos Get e Set
    /**
     * Getter numero
     * @return {number}
     */
	public get_numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get_agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get_tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get_titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get_saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set_numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set_agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set_tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set_titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set_saldo(value: number) {
		this._saldo = value;
	}

  public sacar(valor: number): boolean{
    if(this._saldo >= valor){
      this.set_saldo(this._saldo - valor)
      return true;
    }

    console.log("Saldo é insuficiente!")
    return false;
  }


  public depositar(valor : number): void{
    this.set_saldo(this._saldo + valor);
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
    }
    console.log(colors.bg.black, colors.fg.cyan,"********************************************************");
    console.log("                   Dados da Conta                    ");
    console.log("********************************************************");
    console.log("Número da conta: " + this._numero);
    console.log("Número da agência: " + this._agencia);
    console.log("Tipo da conta: " + tipo);
    console.log("Titular da conta: " + this._titular);
    console.log("Saldo da conta: " + this._saldo);
    console.log("********************************************************",colors.reset);
  }
}