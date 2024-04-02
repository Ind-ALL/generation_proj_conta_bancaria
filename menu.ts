import readline = require("readline-sync");
import { colors } from "./src/util/colors";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanca";
import { contaController } from "./src/controller/contaController";
import { readFileSync } from "fs";

export function main() {
  // Variáveis Auxiliares
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  //Instância da Classe ContaController
  let contas: contaController = new contaController();

  //  let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
  // contas.cadastrar(cc1);

  // let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
  // contas.cadastrar(cc2);

  // let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
  // contas.cadastrar(cp1);

  // let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
  // contas.cadastrar(cp2);

  // contas.listarTodas();

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readline.questionInt("");

    if (opcao == 9) {
      console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCriar Conta\n\n");

        console.log("Digite o númnero da agência: ");
        agencia = readline.questionInt("");

        console.log("Digite o nome do titular da conta: ");
        titular = readline.question("");

        console.log("Digite o tipo de conta: ");
        tipo = readline.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log("Digite o saldo da conta (R$): ");
        saldo = readline.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta (R$): ");
            limite = readline.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            console.log("Digite o dia do aniversário da conta poupança: ");
            aniversario = readline.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        contas.listarTodas();

        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        console.log("Digite o número da conta: ");
        numero = readline.questionInt("");
        contas.procurarPorNumero(numero);

        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        console.log("Digite o número da conta: ");
        numero = readline.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o númnero da agência: ");
          agencia = readline.questionInt("");

          console.log("Digite o nome do titular da conta: ");
          titular = readline.question("");

          tipo = conta.tipo;

          console.log("Digite o saldo da conta (R$): ");
          saldo = readline.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta (R$): ");
              limite = readline.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
              break;

            case 2:
              console.log("Digite o dia do aniversário da conta poupança: ");
              aniversario = readline.questionInt("");
              contas.atualizar(
                new ContaPoupanca(numero, agencia,tipo, titular, saldo, aniversario));
              break;
          }

        }else{
          console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encontrada!", colors.reset)
        }

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");
        
        console.log("Digite o número da conta: ");
        numero = readline.questionInt("");
        contas.deletar(numero);

        break;
      case 6:
        console.log("\n\nSaque\n\n");

        break;
      case 7:
        console.log("\n\nDepósito\n\n");

        break;
      case 8:
        console.log("\n\nTransferência entre Contas\n\n");

        break;
      default:
        console.log("\nOpção Inválida!\n");

        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Ingrid Alves");
  console.log("github: https://github.com/Ind-ALL");
  console.log("*****************************************************");
}

main();
