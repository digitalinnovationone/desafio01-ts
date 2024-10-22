import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

peopleAccount.getName()

peopleAccount.getBalance()

peopleAccount.deposit(100)
console.log(peopleAccount)

peopleAccount.withdraw(110)
console.log(peopleAccount)

peopleAccount.withdraw(100)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

companyAccount.getLoan(500)
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('Nova', 30)

newAccount.deposito(100)
console.log(newAccount)