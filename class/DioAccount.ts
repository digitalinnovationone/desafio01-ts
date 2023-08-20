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

  deposit = (value:number): void => {
    if(this.validateStatus()){
      if(value >= this.balance) {
        const atualizaSaldo = this.balance + value
        this.balance = atualizaSaldo
        console.log(`Voce depositou: ${value}`)
      } else{
        console.log(`Saldo insuficiente`)
      }
    }
  }

  withdraw = (retirada:number): void => {
    if(this.validateStatus()) {
      const atualizaSaldo = this.balance - retirada
      this.balance = atualizaSaldo
      console.log(`Voce sacou: ${retirada}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
