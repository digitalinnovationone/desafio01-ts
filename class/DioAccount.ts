export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): string => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
    return this.name;
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): string => {
    if (this.validateStatus()) {
      this.balance += value;
    }
    return "Voce depositou R$ " + value.toFixed(2);
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log("Voce sacou R$ " + value.toFixed(2));
      } else {
        throw new Error("Saldo insuficiente");
      }
    }
  };

  getBalance = (): number => {
    console.log("Saldo: R$ " + this.balance.toFixed(2));
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
