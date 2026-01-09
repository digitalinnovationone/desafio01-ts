import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const depositValue: number = 30;
const withdrawValue: number = 15;
const loanValue: number = 200;

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(`Nome da titular: ${peopleAccount.getName()}`);
console.log(`A conta está ativa? ${peopleAccount.checkStatus()}`);
console.log(`Saldo inicial: R$${peopleAccount.checkBalance()}`);
peopleAccount.deposit(depositValue);
console.log(
  `O valor de R$${depositValue} foi depositado. Saldo atual: R$${peopleAccount.checkBalance()}.`
);
peopleAccount.withdraw(withdrawValue);
console.log(
  `O valor de R$${withdrawValue} foi sacado. Saldo atual: R$${peopleAccount.checkBalance()}.`
);

console.log("|-------------------------------------------------------|");

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(`Nome da titular: ${companyAccount.getName()}`);
console.log(`A conta está ativa? ${companyAccount.checkStatus()}`);
console.log(`Saldo inicial: R$${companyAccount.checkBalance()}`);
companyAccount.deposit(depositValue);
console.log(
  `O valor de R$${depositValue} foi depositado. Saldo atual: R$${companyAccount.checkBalance()}.`
);
companyAccount.getLoan(loanValue);
console.log(
  `Um empréstimo no valor de R$${loanValue} foi realizado. Saldo atual: R$${companyAccount.checkBalance()}.`
);
companyAccount.withdraw(withdrawValue);
console.log(
  `O valor de R$${withdrawValue} foi sacado. Saldo atual: R$${companyAccount.checkBalance()}.`
);

console.log("|-------------------------------------------------------|");

const premiumAccount: PremiumAccount = new PremiumAccount("Tiago", 712);
console.log(`Nome do titular: ${premiumAccount.getName()}`);
console.log(`A conta está ativa? ${premiumAccount.checkStatus()}`);
console.log(`Saldo inicial: R$${premiumAccount.checkBalance()}`);
premiumAccount.depositPremium(depositValue);
console.log(
  `O valor de R$${depositValue} foi depositado. Por ser uma conta premium, você ganhou mais R$10,00. Saldo atual: R$${premiumAccount.checkBalance()}.`
);
premiumAccount.withdraw(withdrawValue);
console.log(
  `O valor de R$${withdrawValue} foi sacado. Saldo atual: R$${premiumAccount.checkBalance()}.`
);
