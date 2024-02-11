import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valEmprestimo: number): void => {
    if (this.validateStatus()) {
      this.balance += valEmprestimo
      console.log(`Parabéns! Voce pegou um empréstimo de R$${valEmprestimo}.`)
    }
  }
}
