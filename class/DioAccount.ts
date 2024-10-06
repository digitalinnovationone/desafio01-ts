export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    this.balance += amount
    if(this.validateStatus()){
      console.log('Voce depositou' + amount)
    }
  }

  withdraw = (amount: number): void => {
    this.balance -= amount
    if(this.validateStatus() && this.balance >= amount){
      console.log('Voce sacou' + amount)
    }else{
      console.log('Saldo insuficiente')
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

