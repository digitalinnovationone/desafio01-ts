export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 45
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

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
    }
  }

  withdraw = (value: number): void => {
    if(value < this.balance && this.validateStatus()){
      this.balance = this.balance - value
    }
    else{
      throw new Error('Saldo Insuficiente ')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  getStatus = (): boolean => {
    return this.validateStatus()
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
