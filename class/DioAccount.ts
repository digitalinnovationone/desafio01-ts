export abstract class DioAccount {
    private name: string;
    private accountNumber: number;
    private balance: number = 100;
    private accountIsValid: boolean = false;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    public setName(name: string): void {
        this.name = name;
        console.log('Your name has been altered successfully!');
    }

    public getName(): string {
        return this.name;
    }

    public setAccountStatus(status: boolean): void {
        this.accountIsValid = status;
    }

    public isAccountValid(): boolean {
        if (this.accountIsValid) {
            return this.accountIsValid;
        }
        throw new Error('Please, validate your account');
    }

    public deposit(amountToDeposit: number): number {
        if (this.accountIsValid) {
            this.balance += amountToDeposit;
            return this.balance;
        }
        throw new Error('Your account is not valid for deposit');

    }
}
