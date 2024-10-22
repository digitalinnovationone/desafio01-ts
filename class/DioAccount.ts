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
  getBalance = (): number => {
    return this.balance
  }
  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.balance = deposit
      console.log('Voce depositou', this.balance)
    }
    else{
      console.log("Erro ao realizar deposito!")
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus()){
      if((this.balance - withdraw) < 0){
        console.log('Impossivel realizar o saque!')
        withdraw = 0
      }
      else{
        this.balance -= withdraw
        console.log('Voce sacou', withdraw)
        withdraw = 0
  
      }
      
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
