import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Victor', 10)
console.log("Executando deposito...")
peopleAccount.deposit(500)
console.log("Executando saque...")
peopleAccount.withdraw(300)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

console.log("Executando Empréstimo...")
companyAccount.getLoan(5000)

const studentAccount: StudentAccount = new StudentAccount("Letícia", 30)

console.log("Executando deposito com 10% de acréscimo...")
studentAccount.deposit(6000)