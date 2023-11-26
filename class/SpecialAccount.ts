import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

    deposit = (amount: number): void => {
        this.balance += amount + 10;
    }
}