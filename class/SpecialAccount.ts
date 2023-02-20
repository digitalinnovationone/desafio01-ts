import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value + 10;
      console.log('Voce depositou')
    }else {
      console.log("Conta inativa!")
    }
  }
}