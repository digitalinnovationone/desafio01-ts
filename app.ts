import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(200)
console.log(companyAccount)
const newAccount = new NewAccount('Josias', 30)
newAccount.deposit(300)
console.log(newAccount)