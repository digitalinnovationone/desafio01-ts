export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.balance += deposit
      console.log("Seu saldo atual é de " + this.balance)
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus() && this.balance > withdraw){
      this.balance -= withdraw
      console.log("Você sacou o valor de R$ " + withdraw + "\nAgora seu saldo é de R$ " + this.balance)
    } else if (!this.validateStatus()) {
      console.log("Sua conta está inativa.")
    } else {
      console.log("O valor de saque deve ser menor que o valor atual de saldo em sua conta")
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

