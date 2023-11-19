import { DioAccount } from "./DioAccount";

export class NgoAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    this._validateStatus();
    this.balance += value + 10;
  }
}