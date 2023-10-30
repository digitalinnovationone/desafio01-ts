import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    let balance = this.getBalance();
    if (this.validateStatus()) {
      console.log("CompanyAccount: Você pegou um empréstimo", value);
      this.setBalance((balance += value));
    }
  };
}
