import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    let balance = this.getBalance();
    if (balance < value) throw new Error("StudentAccount: Saldo insuficiente");
    if (this.validateStatus()) {
      console.log("StudentAccount: Você depositou", value);
      this.setBalance((balance += value + 10));
    }
  };
}
