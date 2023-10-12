export abstract class DioAccount {
    private name: string;
    private accountNumber: number;
    private balance: number = 100;
    private accountStatusIsValid: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Your name has been altered successfully!');
    };

    getName = (): string => {
        return this.name;
    };

    deposit = (amountToDeposit: number): number => {
        if (this.isValidAccount()) {
            this.balance += amountToDeposit;
            return this.balance;
        }
        throw new Error('You must validate your account before deposit');
    };

    withdraw = (): void => {};

    getBalance = (): void => {
        console.log(this.balance);
    };

    private isValidAccount = (): boolean => {
        if (this.accountStatusIsValid) {
            return true;
        }
        throw new Error('Your account is not valid');
    };
}
