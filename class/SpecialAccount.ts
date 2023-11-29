import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (deposit: number): void => {
    let balance = this.getBalance()
    balance += deposit + 10
    console.log("Você depositou R$ " + deposit + " em sua conta especial e agora seu saldo é de R$ " + balance)
  }
}