import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number) => {
    this._validateStatus();
    const newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
  }
}