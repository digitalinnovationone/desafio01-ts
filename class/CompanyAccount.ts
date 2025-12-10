import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amountValue: number) => {
    this.validateStatus()
    this.setBalance(this.getBalance() + amountValue)
    console.log(`Você pegou um empréstimo de ${amountValue} reais. Agora seu saldo é de ${this.getBalance()} reais`)
  }
}
