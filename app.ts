import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'
import { SpecialAccount } from './class/SpecialAccount'

console.log('<---------TESTE CONTA PESSOA FÍSICA------------->')
// Testando conta pessoa física
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(1)
peopleAccount.withdraw(200)
peopleAccount.getBalance()

console.log('<---------TESTE CONTA DIO------------->')
// Testando conta DioAccount
const dioAccount: DioAccount = new PeopleAccount(2, 'Alex', 20)
dioAccount.deposit(800)
dioAccount.withdraw(300)
dioAccount.getBalance()
dioAccount.getName()

console.log('<---------TESTE CONTA PESSOA JURÍDICA------------->')
// Testando conta pessoa jurídica
const companyAccount: CompanyAccount = new CompanyAccount('Company Inc.', 12345)
companyAccount.getLoan(5000)

console.log('<---------TESTE CONTA ESPECIAL------------->')
// Testando conta especial
const specialAccount: SpecialAccount = new SpecialAccount('Special User', 54321)
specialAccount.Specialdeposit(1000)