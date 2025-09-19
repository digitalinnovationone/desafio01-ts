import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number, Account: DioAccount): void => {
    if (Account.validateStatus()){
      if (value > 0 && this.validateLoan(value)){
        this.withdraw(value)
        Account.deposit(value)
        console.log(`Empréstimo de R$ ${value} para ${Account.getName()} realizado com sucesso!`);
      } else {
        // throw new Error("Valor do empréstimo deve ser positivo")
        console.log("Valor do empréstimo deve ser positivo!");
      }
    }
  }

  validateLoan = (value: number): boolean => {
    if (this.getBalance() > value) {
      return true
    } else {
      console.log("Saldo indisponível para emprestimo!")
      return false
    }
  }
}
