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

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance += deposit;
    }
  };

  withdraw = (withdraw: number): number=> {
    if (this.validateStatus() && withdraw <= this.balance) {
      return this.balance -= withdraw;
    }

    throw new Error("Saldo insuficiente!");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  checkStatus = (): boolean => {
    return this.validateStatus();
  };

  checkBalance = (): number => {
    return this.balance;
  };
}
