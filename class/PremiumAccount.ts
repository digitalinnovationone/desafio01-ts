import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositPremium = (depositValue: number): void => {
    if (this.checkStatus()) {
      this.deposit(depositValue + 10);
    }
  };
}
