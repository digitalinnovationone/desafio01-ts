import { DioAccount } from "./DioAccount";

export class NewCount extends DioAccount {

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    newDeposito = (valueDeposito:number):number => {
        const valueAtualizado = valueDeposito + 10;
        const atualizaSaldo = this.getBalance() + valueAtualizado
        this.setBalance(atualizaSaldo)
        return valueAtualizado
    }
}