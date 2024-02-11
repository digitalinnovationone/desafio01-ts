import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(200)
console.log(companyAccount)