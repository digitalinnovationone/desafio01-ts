import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueEmprestimo:number): void => {
    if(this.validateStatus()){        
      const atualizaSaldo = this.getBalance() + valueEmprestimo;
      this.setBalance(atualizaSaldo);
      console.log(`Voce pegou um empréstimo de: ${valueEmprestimo}`)
    }
  }
}
