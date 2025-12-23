import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    Specialdeposit = (value: number): void => {
        if(this.validateStatus()) {
            this.balance += value + 10
            console.log(`Depósito de ${value} realizado com sucesso!`)
            console.log(`Seu saldo atual é ${this.balance}`)
        } else {
            console.log('Conta inválida')
        }
    }
}