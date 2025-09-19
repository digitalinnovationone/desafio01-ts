export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => { return this.name }
  getBalance = (): number => { return this.balance }

  private setBalance = (value: number): void => {
    this.balance = value;
  };

  setStatus = (status: boolean): void => {
    this.status = status
  }

  deposit(value: number): void {
    console.log(`Operação para depositar R$ ${value}`)
    if (!this.validateStatus()){ return; }
    if(value < 0){ return; }

    this.setBalance(this.balance + value)
    console.log(`Depósito de R$ ${value} efetuado!`);
  }
  
  withdraw(value: number): void {
    console.log(`Operação para sacar R$ ${value}`)
    if (!this.validateStatus()){ return; }
    if (!this.validateWithdraw(value)){ return; }

    if (value <= 0){
      console.log("Valor deve ser positivo!");
      return;
    }

    this.setBalance(this.balance - value)
    console.log(`Saque de R$ ${value} realizado!`);
    // throw new Error("Saldo insuficiente!")
    }

  validateWithdraw = (value: number): boolean => {
    if (value <= this.getBalance()) { return true; }
    console.log("Saldo insuficiente");
    return false;
   }

  validateStatus = (): boolean => {
    if (this.status) { return this.status }
    // throw new Error('Conta inativa')
    console.log('Conta inativa')
    return(false)
  }
}
