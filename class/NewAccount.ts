import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{
  constructor(name: string, accountNumber: number){
      super(name, accountNumber)
  }
  
  deposito = (deposit: number): void => {
      if(this.validateStatus()){
        deposit += 10
        this.deposit(deposit)
        console.log('Voce depositou', deposit)
      }
      else{
        console.log("Erro ao realizar deposito!")
      }
    }
}