import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            const valueToBeAdded = value + 10
            this.setBalance(this.getBalance() + valueToBeAdded)
            console.log('Foi depositado', valueToBeAdded)
        }
    }
}
