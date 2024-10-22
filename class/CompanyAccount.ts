import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.validateStatus()){
      this.deposit(loan)
      console.log('Voce realizou um empréstimo de', loan)
      
    }
    else{
      console.log("Algo deu errado!")
    }
  }

  
}
