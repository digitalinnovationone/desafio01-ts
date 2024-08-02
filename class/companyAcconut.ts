import { DioAcount } from "./DioAccount"

export class CompanyAccount extends DioAcount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
        this.setBalance(90);
    }

    getLoan = (value: number):void => {
        let valor:number = this.getBalance();
        if(this.validateStatus()){
            this.setBalance(valor+value);
        }
    }

    withDraw = (value: number) :void=>{
        let saldo = this.getBalance();
        saldo -= value;
        this.setBalance(saldo);
    };
}