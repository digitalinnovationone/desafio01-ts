import { DioAcount } from "./DioAccount";


export class admAccount extends DioAcount{
    constructor(name: string, accountNumber:number){
        super(name, accountNumber);
        this.setBalance(10);
    }
} 