export abstract class DioAccount {
    private name: string;
    private accountNumber: number;
    private balance: number = 100;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    };

    getName = (): string => {
        return this.name;
    };

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Deposit');
        }


    };

    withdraw = (): void => {};

    getBalance = (): void => {
        console.log(this.balance);
    };

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error('Conta inválida');
    };
}
