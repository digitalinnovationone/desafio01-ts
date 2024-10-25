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

  deposit = (valor: number): void => {
    try {
      this.balance += valor;
      if(!this.validateStatus() || this.balance <= 0) {
        throw new Error("Valor inválido");
      }
      console.log('Deposito', this.balance);

    } catch (error) {
      console.log(error);
    }
  }

  withdraw = (valor: number): void => {
    if(!this.validateStatus() || this.balance < valor) {
      throw new Error("Valor inválido");
    }
    console.log('Sacou', valor)
    this.balance -= valor
    console.log('Saldo: ', this.balance);
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  contaEspecial = (valor: number): void => {
    if (this.validateStatus() || this.balance > 0) {
      console.log('Deposito da conta especial ativa', valor)
      this.deposit(valor += valor * 0.10);
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
