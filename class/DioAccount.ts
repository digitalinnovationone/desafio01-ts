export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
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

  protected _validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected _validateWithdraw = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }

    throw new Error('Saldo insuficiente')
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  getName = (): string => {
    return this.name
  }
}
