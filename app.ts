import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mat', 10);
peopleAccount.deposit(100);
peopleAccount.getBalance();
peopleAccount.deposit(100);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
