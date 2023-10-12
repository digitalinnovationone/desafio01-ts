import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mat', 10);
peopleAccount.deposit();
console.log(peopleAccount);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
