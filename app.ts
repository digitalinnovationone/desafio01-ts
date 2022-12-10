import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

console.log("\n\n------------------- People Account -------------------")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Silvanei Martins', 1)
console.log("Nome da Conta:", peopleAccount.getName())
console.log("Valor Inicial:", peopleAccount.getBalance())
console.log("------------------- Deposito 500 -------------------")
peopleAccount.deposit(500)
console.log("------------------- Retirada 100 -------------------")
peopleAccount.withdraw(100)
console.log("Valor Total:", peopleAccount.getBalance())

console.log("\n\n------------------- Company Account -------------------")
const companyAccount: CompanyAccount = new CompanyAccount('SAM DEVELOP', 2000)
console.log("Nome da Conta:", companyAccount.getName())
console.log("Valor Inicial:", companyAccount.getBalance())
console.log("------------------- Deposito 700 -------------------")
companyAccount.deposit(700)
console.log("------------------- Retirada 200 -------------------")
companyAccount.withdraw(200)
console.log("Valor Total:", companyAccount.getBalance())

console.log("\n\n------------------- Especial Account -------------------")
const specialAccount: SpecialAccount = new SpecialAccount('SAM SEO', 4000)
console.log("Nome da Conta:", specialAccount.getName())
console.log("Valor Inicial:", specialAccount.getBalance())
console.log("------------------- Deposito 1000 -------------------")
specialAccount.deposit(1000)
console.log("------------------- Retirada 300 -------------------")
specialAccount.withdraw(300)
console.log("Valor Total:", specialAccount.getBalance())
