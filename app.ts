import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount:CompanyAccount = new CompanyAccount('sdbghj', 56)
const plusAccount:PlusAccount = new PlusAccount('sjhad', 45)

console.log('DADOS DE PEOPLE ACCOUNT', peopleAccount)
peopleAccount.deposit(50)
peopleAccount.doc_id
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.getStatus()
peopleAccount.setName('NOVO NOME')
peopleAccount.getName()
peopleAccount.withdraw(50)

console.log('DADOS DE COMPANY ACCOUNT', companyAccount)
companyAccount.deposit(50)
companyAccount.getBalance()
companyAccount.getName()
companyAccount.getStatus()
companyAccount.setName('NOVO NOME')
companyAccount.getName()
companyAccount.withdraw(50)


console.log('DADOS DE PLUS ACCOUNT', plusAccount)
plusAccount.deposit(50)
plusAccount.getBalance()
plusAccount.getName()
plusAccount.getStatus()
plusAccount.setName('NOVO NOME')
plusAccount.getName()
plusAccount.withdraw(50)

