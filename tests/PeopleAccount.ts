import { PeopleAccount } from '../class/PeopleAccount'

export const test_deposit_withdraw_ok = (person1Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com saldo positivo ========")
    person1Account.getName()
    console.log(`Saldo Atual: R$ ${person1Account.getBalance()}`)
    person1Account.deposit(500)
    
    person1Account.withdraw(400)
    console.log(`Saldo Atual: R$ ${person1Account.getBalance()}`)
}

export const test_deposit_withdraw_without_money_error = (person2Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com saldo negativo ========")
    person2Account.getName()
    console.log(`Saldo Atual: R$ ${person2Account.getBalance()}`)
    person2Account.deposit(500)
    
    person2Account.withdraw(600)
    console.log(`Saldo Atual: R$ ${person2Account.getBalance()}`)
}

export const test_deposit_with_inative_account_error = (person3Account: PeopleAccount): void => {
    console.log("======== Teste de depósito com conta inativa ========")
    person3Account.setStatus(false)
    person3Account.getName()
    console.log(`Saldo Atual: R$ ${person3Account.getBalance()}`)
    person3Account.deposit(500)
    console.log(`SaldoAtuale: R$ ${person3Account.getBalance()}`)
}

export const test_deposit_ok_inative_account_and_withdraw_error = (person4Account: PeopleAccount): void => {
    console.log("======== Teste de depósito/saque com conta inativa ========")
    person4Account.setStatus(false)
    person4Account.getName()
    console.log(`Saldo Atual: R$ ${person4Account.getBalance()}`)
    person4Account.deposit(500)

    person4Account.setStatus(false)
    person4Account.withdraw(600)
    console.log(`Saldo Atual: R$ ${person4Account.getBalance()}`)
}