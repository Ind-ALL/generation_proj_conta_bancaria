import readline = require("readline-sync");
import { colors } from "./src/util/colors";
import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanca";
import { contaController } from "./src/controller/contaController";

export function main() {
  // Variáveis Auxiliares
  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  //Instância da Classe ContaController
  let contas: contaController = new contaController();

  while (true) {
    console.log(
      colors.fg.magenta,
      "                                                     "
    );
    console.log("+---------------------------------------------------+");
    console.log("|                                                   |");
    console.log("|                   BANCO +RIO                      |");
    console.log("|                                                   |");
    console.log("+---------------------------------------------------+");
    console.log("|                                                   |");
    console.log("|            1 - Criar Conta                        |");
    console.log("|            2 - Listar todas as Contas             |");
    console.log("|            3 - Buscar Conta por Numero            |");
    console.log("|            4 - Atualizar Dados da Conta           |");
    console.log("|            5 - Apagar Conta                       |");
    console.log("|            6 - Sacar                              |");
    console.log("|            7 - Depositar                          |");
    console.log("|            8 - Transferir valores entre Contas    |");
    console.log("|            9 - Sair                               |");
    console.log("|                                                   |");
    console.log("+---------------------------------------------------+");
    console.log(
      "                                                     ",
      colors.reset
    );

    console.log(colors.bg.magenta, colors.fg.whitestrong,"Entre com a opção desejada: ", colors.reset);
    opcao = readline.questionInt("");

    if (opcao == 9) {
      console.log(colors.fg.magentastrong,
        "\nNo Banco +Rio você é mais feliz - O seu Futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.magentastrong,"+--------------------+")
        console.log(" |     Criar Conta    |");
        console.log(" +--------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o númnero da agência: ", colors.reset);
        agencia = readline.questionInt("");

        console.log(colors.fg.magentastrong,"Digite o nome do titular da conta: ", colors.reset);
        titular = readline.question("");

        console.log(colors.fg.magentastrong,"Digite o tipo de conta: ", colors.reset);
        tipo = readline.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log(colors.fg.magentastrong,"Digite o saldo da conta (R$): ", colors.reset);
        saldo = readline.questionFloat("");

        switch (tipo) {
          case 1:
            console.log(colors.fg.magentastrong,"Digite o limite da conta (R$): ", colors.reset);
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
            console.log(colors.fg.magentastrong,"Digite o dia do aniversário da conta poupança: ", colors.reset);
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

        keyPress();
        break;
      case 2:
        console.log(colors.fg.magentastrong,"+------------------------------+")
        console.log(" |    Listar todas as Contas    |");
        console.log(" +------------------------------+");
        console.log(colors.reset);

        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log(colors.fg.magentastrong,"+------------------------------+")
        console.log(" |   Consultar dados da Conta   |");
        console.log(" +------------------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta: ", colors.reset);
        numero = readline.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log(colors.fg.magentastrong,"+------------------------------+")
        console.log(" |   Atualizar dados da Conta   |");
        console.log(" +------------------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta: ", colors.reset);
        numero = readline.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log(colors.fg.magentastrong,"Digite o númnero da agência: ", colors.reset);
          agencia = readline.questionInt("");

          console.log(colors.fg.magentastrong,"Digite o nome do titular da conta: ", colors.reset);
          titular = readline.question("");

          tipo = conta.tipo;

          console.log(colors.fg.magentastrong,"Digite o saldo da conta (R$): ", colors.reset);
          saldo = readline.questionFloat("");

          switch (tipo) {
            case 1:
              console.log(colors.fg.magentastrong,"Digite o limite da conta (R$): ", colors.reset);
              limite = readline.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              console.log(colors.fg.magentastrong,"Digite o dia do aniversário da conta poupança: ", colors.reset);
              aniversario = readline.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            colors.bg.red, colors.fg.redstrong,
            "A conta numero: " + numero + " não foi encontrada!",
            colors.reset
          );
        }

        keyPress();
        break;
      case 5:
        console.log(colors.fg.magentastrong,"+----------------------+")
        console.log(" |   Apagar uma conta   |");
        console.log(" +----------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta: ", colors.reset);
        numero = readline.questionInt("");
        contas.deletar(numero);

        keyPress();
        break;
      case 6:
        console.log(colors.fg.magentastrong,"+----------------------+")
        console.log(" |         Saque        |");
        console.log(" +----------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta: ", colors.reset);
        numero = readline.questionInt("");

        console.log(colors.fg.magentastrong,"Digite o valor do saque (R$): ", colors.reset);
        valor = readline.questionFloat("");

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log(colors.fg.magentastrong,"+-------------------------+")
        console.log(" |         Depósito        |");
        console.log(" +-------------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta: ", colors.reset);
        numero = readline.questionInt("");

        console.log(colors.fg.magentastrong,"Digite o valor do depósito (R$): ", colors.reset);
        valor = readline.questionFloat("");

        contas.depositar(numero, valor);

        keyPress();
        break;
      case 8:
        console.log(colors.fg.magentastrong,"+-----------------------------------+")
        console.log(" |     Transferência entre contas    |");
        console.log(" +-----------------------------------+");
        console.log(colors.reset);

        console.log(colors.fg.magentastrong,"Digite o número da conta origem: ", colors.reset);
        numero = readline.questionInt("");

        console.log(colors.fg.magentastrong,"Digite o número da conta destino: ", colors.reset);
        numeroDestino = readline.questionInt("");

        console.log(colors.fg.magentastrong,"Digite o valor do depósito (R$): ", colors.reset);
        valor = readline.questionFloat("");

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
        break;
      default:
        console.log("\n")
        console.log(colors.bg.red, colors.fg.redstrong,"Opção Inválida!", colors.reset);

        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
  console.log(colors.fg.magenta,"+---------------------------------------------------+");
  console.log(" |                                                   |");
  console.log(" |      Projeto Desenvolvido por: Ingrid Alves       |");
  console.log(" |      github: https://github.com/Ind-ALL           |");
  console.log(" |                                                   |");
  console.log(" +---------------------------------------------------+", colors.reset);
}

function keyPress(): void {
  console.log("---------------------------------")
  console.log("Precione enter para continuar...");
  console.log(colors.reset, "");
  readline.prompt();
}

main();
