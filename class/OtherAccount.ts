import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(value: number): void {
    const bonus = 10;
    const newValue = value + bonus
    super.deposit(newValue);
  }
}