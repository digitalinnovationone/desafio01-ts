import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valorDeposito: number): void => {
        this.balance += (valorDeposito + 10)
    }
}