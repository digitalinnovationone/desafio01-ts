import { DioAccount } from "./DioAccount"


export class StudentAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount:number) => {
    if(amount <= 0) throw new Error("Não é possível depositar valores zerados,negativos ou nulos.") 
    this.setBalance(this.getBalance()+ amount +(amount * 0.10))
    console.log(`Você Depositou ${amount} reais, Agora você tem ${this.getBalance()} reais.`)
  }
}