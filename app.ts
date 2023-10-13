import { CompanyAccount } from './class/CompanyAccount';
// import { PeopleAccount } from './class/PeopleAccount';

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mat', 10);





const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);

companyAccount.setAccountStatus(true);
console.log(`Your balance before loan: ${companyAccount.getBalance()}`);
companyAccount.getLoan(1010);
console.log(`New balance after loan: ${companyAccount.getBalance()}`);
console.log(companyAccount.isAccountValid());

