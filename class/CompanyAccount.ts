import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (loanAmount: number): number => {
        if (this.isAccountValid()) {
            const newBalance = this.deposit(loanAmount);
            return newBalance;
        }
        else{
            throw new Error("Your account is not valid; you cannot request a loan.");
        }

    };
}
