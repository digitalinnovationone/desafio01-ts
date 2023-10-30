import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { StudentAccount } from "./class/StudentAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jeni", 10);
console.log("=======================  PeopleAccount  =======================");
console.table(peopleAccount);
peopleAccount.getName();
peopleAccount.setBalance(100);
peopleAccount.getBalance();
peopleAccount.deposit(100);
peopleAccount.withdraw(10);
peopleAccount.validateStatus();

const companyAccount: CompanyAccount = new CompanyAccount("Jeni", 10);
console.log("=======================  CompanyAccount  =======================");
console.table(companyAccount);
companyAccount.setBalance(100);
companyAccount.getLoan(10);

const studentAccount: StudentAccount = new StudentAccount("Jeni", 10);
console.log("=======================  StudentAccount  =======================");
console.table(studentAccount);
studentAccount.setBalance(100);
studentAccount.deposit(10);
console.log("================================================================");
