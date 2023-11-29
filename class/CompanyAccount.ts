import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.validateStatus()){
      let balance = this.getBalance()
      balance += loan
      console.log("Você realizou um empréstimo de R$ " + loan + " e agora seu saldo atual é de R$ " + balance)
    } else {
      console.log("Sua conta está inativa.")
    }
  }
}
