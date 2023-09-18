export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value);
      console.log('Depósito realizado com sucesso! Seu saldo agora é de: ' + this.getBalance());
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.getBalance() - value < 0) {
      return console.log('Saldo Insuficiente!');
    }
    this.setBalance(this.getBalance() - value);
    console.log(
      'Saque realizado com sucesso no valor de ' +
        value +
        '. Seu saldo atual é: ' +
        this.getBalance()
    );
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (value: number): void => {
    this.balance = value;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
