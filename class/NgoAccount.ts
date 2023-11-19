import { DioAccount } from "./DioAccount";

export class NgoAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    this._validateStatus();
    const newBalance = this.getBalance() + value + 10;
    this.setBalance(newBalance);
  }
}