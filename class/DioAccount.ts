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

  getStatus = (): boolean => {
    return this.status;
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount;
      console.log('Voce depositou')
    }
  }

  withdraw = (amount: number): void => {
    if (this.balance > amount) {
      this.balance -= amount;
    }
    console.log('Voce sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}