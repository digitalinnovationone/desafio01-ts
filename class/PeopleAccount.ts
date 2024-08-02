import { DioAcount } from "./DioAccount";
import { CompanyAccount } from "./companyAcconut";

export class PeopleAccount extends DioAcount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
        this.setBalance(20);
        this.setStatus(true);
    }
}




