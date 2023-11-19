import { CompanyAccount } from './class/CompanyAccount'
import { NgoAccount } from './class/NgoAccount'
import { PeopleAccount } from './class/PeopleAccount'

console.log('\n');
// PEOPLE ACCOUNT
console.log('PEOPLE ACCOUNT')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.getAccountNumber(); // Expect to be 1;
peopleAccount.deposit(10); // Expect to be 20;
peopleAccount.withdraw(5); // Expect to be 15;
console.log(`Seu nome: ${peopleAccount.getName()}`); // Expect to be Nath;
console.log(`Número da conta: ${peopleAccount.getAccountNumber()}`); // Expect to be 1;
console.log(`Saldo atual: ${peopleAccount.getBalance()}`); // Expect to be 15;
peopleAccount.setBalance(200); // Expect to be 200;
console.log(`Saldo atual: ${peopleAccount.getBalance()}`); // Expect to be 200;
console.log('\n');

// COMPANY ACCOUNT
console.log('COMPANY ACCOUNT')
const companyAccount: CompanyAccount = new CompanyAccount('Dio', 2);
companyAccount.deposit(10); // Expect to be 10;
console.log(`Saldo atual: ${companyAccount.getBalance()}`); // Expect to be 10;
companyAccount.withdraw(5); // Expect to be 5;
console.log(`Seu nome: ${companyAccount.getName()}`); // Expect to be Dio;
console.log(`Número da conta: ${companyAccount.getAccountNumber()}`); // Expect to be 2;
console.log(`Saldo atual: ${companyAccount.getBalance()}`); // Expect to be 5;
companyAccount.setBalance(200); // Expect to be 200;
console.log(`Saldo atual: ${companyAccount.getBalance()}`); // Expect to be 200;
companyAccount.getLoan(100); // Expect balance to be 300;
console.log(`Saldo atual: ${companyAccount.getBalance()}`); // Expect to be 300;
console.log('\n');

// NGO ACCOUNT
console.log('NGO ACCOUNT')
const ngoAccount: NgoAccount = new NgoAccount('FMMA Help', 3);
ngoAccount.deposit(10); // Expect to be 10;
console.log(`Saldo atual: ${ngoAccount.getBalance()}`); // Expect to be 10;
ngoAccount.withdraw(5); // Expect to be 5;
console.log(`Saldo atual: ${ngoAccount.getBalance()}`); // Expect to be 5;
console.log(`Seu nome: ${ngoAccount.getName()}`); // Expect to be FMMA Help;
console.log(`Número da conta: ${ngoAccount.getAccountNumber()}`); // Expect to be 3;
ngoAccount.setBalance(200); // Expect to be 200;
console.log(`Saldo atual: ${ngoAccount.getBalance()}`); // Expect to be 200;
console.log('\n');