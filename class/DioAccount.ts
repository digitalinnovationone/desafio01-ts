export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 222
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    {
      this.name = name
      this.accountNumber = accountNumber

    }
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositAmount: number): number => {
    this.balance = depositAmount + this.balance
    return this.balance;
  }

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus() && withdrawAmount <= this.balance) {
      console.log('Saque autorizado!')
      this.balance = this.balance - withdrawAmount;
      console.log(`Seu saldo atual é ${this.balance}`)
    } else {
      console.log('Valor de saque inválido ou conta desativada')
    }
  }

  getBalance = (): void => {
    console.log('SEU SALDO É: ', this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
