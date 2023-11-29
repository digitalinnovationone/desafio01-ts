import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'


// Alterar valor do saldo conforme depósito
const peopleAccount : PeopleAccount = new PeopleAccount(1, "Thalita Costa", 1234)

peopleAccount.deposit(50)
peopleAccount.deposit(100)


// Apenas contas ativas e com saldo maior que o solicitado no saque podem realizar saques

peopleAccount.withdraw(20)
peopleAccount.withdraw(500)

// Acrescente o valor do empréstimo ao saldo atual

const companyAccount : CompanyAccount = new CompanyAccount("Thalita", 1235)

companyAccount.deposit(500)
companyAccount.getLoan(1200)

// Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito

const specialAccount: SpecialAccount = new SpecialAccount("Thalita", 1236)
specialAccount.getBalance()
specialAccount.deposit(200)