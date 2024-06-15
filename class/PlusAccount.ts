import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    deposit = (value: number): void => {
        if(this.getStatus()){
          this.balance = this.balance + value + 10
        }
        else{
          throw new Error('Saldo Insuficiente ')
        }
      }
}