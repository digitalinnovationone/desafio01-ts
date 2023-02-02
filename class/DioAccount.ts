export abstract class DioAccount {
  private name: string;
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

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  deposit = (accountNumber: number): void => {
    this.balance += accountNumber;
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.validateWithdrawAmount(amount)) {
      const withdrawn = this.balance - amount;
      console.log(`Você sacou ${amount}. Saldo atual: ${withdrawn}`);
    }
  };

  getBalance = () => {
    return console.log(this.balance);
  };

  //get to only get value, setter to change property value.
  setBalance = (value: number): void => {
    this.balance += value;
  };

  private validateWithdrawAmount = (amout: number): boolean => {
    if (this.balance >= amout && this.balance > 0) {
      return true;
    }
    throw new Error(`Valor inválido! Verifique seu saldo.`);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Sua conta está inativa! Entre em contato com o banco");
  };
}
