export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (value: number): void => {
    this._validateStatus();
    this.balance += value;
  }

  withdraw = (value: number): void => {
    this._validateStatus();
    this._validateWithdraw(value);
    this.balance -= value;
  }

  private _validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private _validateWithdraw = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }

    throw new Error('Saldo insuficiente')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
}
