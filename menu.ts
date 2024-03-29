import readline = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanca";

export function main() {
  let opcao: number;

  let c1: Conta = new Conta(1, 123, 1, "Jon Snow", 100)
  c1.visualizar();
  c1.sacar(200);
  c1.visualizar();
  c1.depositar(1);
  c1.visualizar();

  const cc1: ContaCorrente = new ContaCorrente(11, 456, 1, "Sansa Stark", 50 ,500);
  cc1.visualizar();
  cc1.sacar(300);
  cc1.visualizar();
  cc1.depositar(50);
  cc1.visualizar();

  const cp1: ContaPoupanca = new ContaPoupanca(15, 789, 2, "Rei Robert", 10000, 12);
  cp1.visualizar();
  cp1.sacar(9500);
  cp1.visualizar();
  cp1.depositar(2);
  cp1.visualizar();


  while (true) {
    console.log(colors.bg.black, colors.fg.cyan,"*****************************************************");
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
    console.log("                                                     ", colors.reset);

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

        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");

        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por número\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");

        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");

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
