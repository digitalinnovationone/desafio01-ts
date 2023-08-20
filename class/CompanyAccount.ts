import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueEmprestimo:number): void => {
    if(this.validateStatus()){        
      const atualizaSaldo = this.balance + valueEmprestimo
      this.balance = atualizaSaldo
      console.log(`Voce pegou um empréstimo de: ${valueEmprestimo}`)
    }
  }
}
