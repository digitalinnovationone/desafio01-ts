import { CompanyAccount } from './class/CompanyAccount'
import { NewCount } from './class/NewCount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)

const newCount: NewCount = new NewCount('Israel', 30);
newCount.newDeposito(100)
console.log(newCount)