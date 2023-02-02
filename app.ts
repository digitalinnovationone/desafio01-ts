import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const contaJefferson: PeopleAccount = new PeopleAccount(1, "Nath", 10);
// contaJefferson.deposit(200);
// contaJefferson.getBalance();
// contaJefferson.deposit(200);
// contaJefferson.getBalance();
// contaJefferson.withdraw(400);

const contaJtech: CompanyAccount = new CompanyAccount("Jtech", 79437);
console.log(contaJtech);

contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getBalance();
