import { DioAccount } from "./DioAccount";

export class AffiliateAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // TODO: Criar um novo tipo de conta a partir da classe DioAccount
  // Esta conta não deve receber novos atributos
  // Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósitio de R$ 100,00 ficaria R$ 110,00)

  depositExtra = (value: number): string => {
    if (this.validateStatus()) {
      this.deposit(value + 10);
    }
    return "Voce depositou R$ " + value.toFixed(2) + " com o extra de R$ 10.00";
  };
}
