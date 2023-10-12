// import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mat', 10);

console.log(peopleAccount.isAccountValid());
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(200);


// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
// console.log(companyAccount);
