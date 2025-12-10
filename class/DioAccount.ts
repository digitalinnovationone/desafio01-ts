export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (balance: number): number => {
    return this.balance = balance
  }



  getName = (): string => {
    return this.name
  }

  deposit = (amount:number): void => {
    if(amount <= 0) throw new Error("Não é possível depositar valores zerados,negativos ou nulos.")
    this.balance += amount
    console.log(`Você depositou ${amount} reais. Agora seu saldo é ${this.balance} reais`)
  }

  withdraw = (amount:number): void => {
    this.validateStatus()
    if(this.balance >= amount){
      this.balance -= amount
      console.log(`Você sacou ${amount} reais. Agora seu saldo é ${this.balance} reais`)
    } else {
      console.log("Saldo insuficiente")
    }
  }

  getBalance = ():number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
