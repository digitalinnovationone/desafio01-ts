import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.withdraw(0)
peopleAccount.contaEspecial(100)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(0)
companyAccount.getLoan(100)
console.log(companyAccount)