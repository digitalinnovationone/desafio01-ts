import { DioAccount } from "./DioAccount";

export class RecommendUserAcccount extends DioAccount {

    constructor( name: string, accountNumber: number){
        super(name, accountNumber);

    }
    reccomendedPersonDeposit = (ammountToDeposit: number ): number =>{
        ammountToDeposit += 10;
        this.deposit(ammountToDeposit);
        return this.getBalance();
    };}
