import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
// console.log(peopleAccount);
console.log(">>>>> >>>>> >>>>> peopleAccount");
peopleAccount.deposit(20);
peopleAccount.withdraw(2);
peopleAccount.withdraw(47);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// console.log(companyAccount);
console.log(">>>>> >>>>> >>>>> companyAccount");
companyAccount.deposit(30);
companyAccount.withdraw(4);
companyAccount.withdraw(10);
companyAccount.withdraw(50);

companyAccount.getLoan(500);
