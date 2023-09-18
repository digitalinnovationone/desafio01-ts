import { CompanyAccount } from './class/CompanyAccount';
import { FundsAccount } from './class/FundsAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(18813, 'Rafael', 44457);
console.table(peopleAccount);
console.log(peopleAccount.getBalance());
peopleAccount.deposit(320);
peopleAccount.withdraw(300);

console.log('############');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 224001);
console.table(companyAccount);
console.log(companyAccount.getBalance());
companyAccount.getLoan(1500);
console.log(companyAccount.getBalance());

console.log('############');

const fundsAccount: FundsAccount = new FundsAccount('Investimento', 444571);
console.table(fundsAccount);
console.log(fundsAccount.getBalance());
fundsAccount.deposit(300);
