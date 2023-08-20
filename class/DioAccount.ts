export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getBalance = (): number =>{
    const valueBalance = this.balance;
    return valueBalance
  }

  setBalance = (value:number): number =>{
    const valueBalance = this.balance;
    const valueAtualizado = valueBalance + value;
    return valueAtualizado;
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

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
