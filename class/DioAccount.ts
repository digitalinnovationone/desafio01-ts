export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`---------- DEPOSITO ----------`);
      console.log(`Voce depositou R$ ${value}`);
      console.log(`Saldo em conta atualizado: R$ ${this.balance}`);
    }
  };

  withdraw = (value: number): void => {
    if (this.balance > value) {
      this.balance -= value;
      console.log(`---------- SAQUE ----------`);
      console.log(`Voce sacou R$ ${value}`);
      console.log(`Saldo em conta atualizado: R$ ${this.balance}`);
      console.log();
    } else {
      console.log(`---------- OPERAÇÃO INVÁLIDA ----------`);
      console.log(
        `Saldo insuficiente para saque. Saldo atual em conta: R$ ${this.balance}`
      );
      console.log();
    }
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

  getStatus = (): boolean => {
    return this.status;
  };
}
