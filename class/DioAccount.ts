export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean;

  constructor(name: string, accountNumber: number, status: boolean){
    this.name = name;
    this.accountNumber = accountNumber;
    this.status = status;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('Voce depositou');
    }else {
      console.log("Conta inativa!");
    }
  }

  withdraw = (value : number): void => {

    if(this.validateStatus() && value <= this.balance){
      this.balance -= value;
      console.log('Voce sacou');
    } else {
      console.log("Conta inativa ou saldo insuficiente!");
    }

  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
