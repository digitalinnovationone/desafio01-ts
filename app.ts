import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

// Criando instâncias

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Henrique', 10, true);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, true);
const specialAccount: SpecialAccount = new SpecialAccount('DIO Especial', 40, true);

const inactivePeopleAccount: PeopleAccount = new PeopleAccount(1, 'Outro Henrique', 10, false);
const inactiveCompanyAccount: CompanyAccount = new CompanyAccount('DIO 2', 20, false);
const inactivespecialAccount: SpecialAccount = new SpecialAccount('DIO Especial 2', 40, false);

// Depósito

peopleAccount.deposit(100.50)
peopleAccount.getBalance();

companyAccount.deposit(250.00)
companyAccount.getBalance();

specialAccount.deposit(100.00);
specialAccount.getBalance();

// Saque

peopleAccount.withdraw(150) // Operação deve falhar
peopleAccount.getBalance();
peopleAccount.withdraw(80) // Deve retornar sucesso
peopleAccount.getBalance();

// Empréstimo
companyAccount.getLoan(500);
companyAccount.getBalance();

// Conta inativas 

try{
    inactivePeopleAccount.deposit(200);
}catch(e) {
    console.log("Erro: " + e);
}

try{
    inactivespecialAccount.deposit(300);
}catch(e) {
    console.log("Erro: " + e);
}

try{
    inactiveCompanyAccount.withdraw(10);
}catch(e) {
    console.log("Erro: " + e);
}

try{
    inactiveCompanyAccount.getLoan(10);
}catch(e) {
    console.log("Erro: " + e);
}