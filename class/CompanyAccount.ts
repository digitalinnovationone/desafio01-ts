import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    if(this.validateStatus()) {
      this.balance += loanAmount
      console.log(`Empréstimo de ${loanAmount} concedido com sucesso!`)
      console.log(`Seu saldo atual é ${this.balance}`)
    } else {
      console.log('Conta inválida')
    }
  }
}
