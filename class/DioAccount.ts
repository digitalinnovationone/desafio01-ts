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
    console.log("DioAccount: getName ", this.name);
    return this.name;
  };

  deposit = (value: number): void => {
    let balance = this.balance;
    if (balance < value) throw new Error("Saldo insuficiente");
    if (this.validateStatus()) {
      console.log("DioAccount: Você depositou", value);
      this.setBalance((balance += value));
    }
  };

  withdraw = (value: number): void => {
    let balance = this.balance;
    if (balance < value) throw new Error("DioAccount: Saldo insuficiente");
    if (this.validateStatus()) {
      console.log("DioAccount: Você sacou", value);
      this.setBalance((balance -= value));
    }
  };

  setBalance = (value: number): void => {
    this.balance = value;
    console.log(
      "DioAccount: Saldo alterado com sucesso, seu novo saldo é",
      this.balance
    );
  };

  getBalance = (): number => {
    console.log("DioAccount: getBalance ", this.balance);
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      console.log("DioAccount: validateStatus ", this.status);
      return this.status;
    }

    throw new Error("DioAccount: Conta inválida");
  };
}
