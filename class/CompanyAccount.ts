import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
    this.deposit(valor)
    console.log('Voce pegou um empréstimo')
  }
}
