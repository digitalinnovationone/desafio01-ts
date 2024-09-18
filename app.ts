import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { AffiliateAccount } from "./class/AffiliateAccount";

// TODO 1: Crie uma instância da classe CompanyAccount e execute os metodos
const companyAccount = new CompanyAccount("Kayque", 1);
companyAccount.getBalance();
console.log(companyAccount.deposit(10));
companyAccount.getBalance();
companyAccount.withdraw(5);
companyAccount.getBalance();
console.log(companyAccount.getName());
console.log(companyAccount.setName("Kayque Ambires"));
console.log(companyAccount.validateStatus());

// TODO 2: Crie uma instância da classe PeopleAccount e execute os metodos
const peopleAccount = new PeopleAccount(1, "Jorge", 2);
peopleAccount.getBalance();
console.log(peopleAccount.deposit(10));
peopleAccount.getBalance();
peopleAccount.withdraw(5);
peopleAccount.getBalance();
console.log(peopleAccount.getName());
console.log(peopleAccount.setName("Jorge Silva"));
console.log(peopleAccount.validateStatus());

// TODO 3: Crie uma instância da classe AffiliateAccount e execute os metodos
const affiliateAccount = new AffiliateAccount("Ruan", 3);
affiliateAccount.getBalance();
console.log(affiliateAccount.deposit(10));
affiliateAccount.getBalance();
console.log(affiliateAccount.depositExtra(20));
affiliateAccount.getBalance();
affiliateAccount.withdraw(10);
affiliateAccount.getBalance();
console.log(affiliateAccount.getName());
console.log(affiliateAccount.setName("Ruan Vieira"));
console.log(affiliateAccount.validateStatus());
