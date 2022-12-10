export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome da conta alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value
            console.log(`Valor R$${value} depositado com sucesso!`)
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance >= value) {
            this.balance -= value
            console.log(`Voce fez um saque no valor de R$${value}!`)
        }
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (value: number): void => {
        this.balance += value
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}
