import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.getStatus()) {
      this.balance += amount;
      console.log('Voce pegou um empréstimo')
    } else{
      throw new Error("Não é possível pegar um empréstimo com a conta desativada")
    }
  }
}
