import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()){
      this.deposit(amount)
    }
    console.log('Voce pegou um empréstimo')
  }
}
