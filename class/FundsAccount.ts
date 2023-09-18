import { DioAccount } from './DioAccount';

export class FundsAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Acrescenta mais 10% sobre o valor do depósito
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + (value * 10) / 100);
      console.log('Depósito realizado com sucesso! Seu saldo agora é de: ' + this.getBalance());
    }
  };
}
