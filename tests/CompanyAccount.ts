import { CompanyAccount } from '../class/CompanyAccount'
import { DioAccount } from '../class/DioAccount'

export const test_loan_ok = (
    company1Account: CompanyAccount ,person1Account: DioAccount
): void => {
    console.log("======== Teste de empréstimo com valor/saldo positivo e usuário ativo ========")
    company1Account.deposit(5000)
    console.log(`Efetuar empréstimo a ${person1Account.getName()}`);
    company1Account.getLoan(400, person1Account)
}

export const test_loan_with_account_inative_error = (
    company1Account: CompanyAccount ,person2Account: DioAccount
): void => {
    console.log("======== Teste de empréstimo com valor/saldo positivo e usuário inativo ========")
    company1Account.deposit(5000)
    console.log(`Efetuar empréstimo a ${person2Account.getName()}`);
    person2Account.setStatus(false)
    company1Account.getLoan(400, person2Account)
}

export const test_loan_with_value_negative_error = (
    company1Account: CompanyAccount ,person3Account: DioAccount
): void => {
    console.log("======== Teste de empréstimo com valor negativo ========")
    company1Account.deposit(5000)
    console.log(`Efetuar empréstimo a ${person3Account.getName()}`);
    company1Account.getLoan(-400, person3Account)
}

export const test_loan_with_balance_negative_error = (
    company1Account: CompanyAccount ,person4Account: DioAccount
): void => {
    console.log("======== Teste de empréstimo com saldo negativo ========")
    company1Account.deposit(500)
    console.log(`Efetuar empréstimo a ${person4Account.getName()}`);
    company1Account.getLoan(4000, person4Account)
}