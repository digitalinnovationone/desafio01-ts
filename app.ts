import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { RecommendUserAcccount } from './class/RecommendedUserAccount';
// Creates a new company account
const companyAccount = new CompanyAccount('pessoa XYZ', 12345);

// Creates a new personal account
const personalAccount = new PeopleAccount(1, 'Marcelo', 123);

// Creates a new recommended user account
const recommendUserAccount = new RecommendUserAcccount('Joao', 67890);

// Creates tests to methods
function testCompanyAccount() {
    try {
        companyAccount.setName('pessoa Z');
        companyAccount.getName();
        companyAccount.setAccountStatus(true);
        companyAccount.isAccountValid();
        console.log(
            `Saldo da empresa antes do deposito ${companyAccount.getBalance()}`,
        );
        companyAccount.deposit(1000);
        console.log(
            `Saldo da empresa depois do deposito ${companyAccount.getBalance()}`,
        );
        console.log(
            `Saldo da empresa antes do saque ${companyAccount.getBalance()}`,
        );
        companyAccount.withdraw(1000);
        console.log(
            `Saldo da empresa depois do saque ${companyAccount.getBalance()}`,
        );
        console.log(
            `Saldo da empresa antes do empréstimo: ${companyAccount.getBalance()}`,
        );
        companyAccount.getLoan(100000);
        console.log(
            `Novo saldo da empresa após o empréstimo: ${companyAccount.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}

function testPeopleAccount() {
    try {
        personalAccount.setName('Jose');
        personalAccount.getName();
        personalAccount.setAccountStatus(true);
        personalAccount.isAccountValid();
        console.log(
            `Saldo da pessoa antes do deposito ${personalAccount.getBalance()}`,
        );
        personalAccount.deposit(1000);
        console.log(
            `Saldo da pessoa depois do deposito ${personalAccount.getBalance()}`,
        );
        console.log(
            `Saldo da pessoa antes do saque ${personalAccount.getBalance()}`,
        );
        personalAccount.withdraw(1000);
        console.log(
            `Saldo da pessoa depois do saque ${personalAccount.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}
function testReccomendedUserAccount() {
    try {
        recommendUserAccount.setAccountStatus(true);
        recommendUserAccount.setName('Jose');
        recommendUserAccount.getName();

        recommendUserAccount.isAccountValid();
        console.log(
            `Saldo do usuário recomendado antes do deposito ${recommendUserAccount.getBalance()}`,
        );
        recommendUserAccount.deposit(1000);
        console.log(
            `Saldo do usuário recomendado depois do deposito ${recommendUserAccount.getBalance()}`,
        );
        console.log(
            `Saldo do usuário recomendado antes do saque ${recommendUserAccount.getBalance()}`,
        );
        recommendUserAccount.withdraw(1000);
        console.log(
            `Saldo do usuário recomendado depois do saque ${recommendUserAccount.getBalance()}`,
        );
    } catch (error) {
        console.error(error);
    }
}
// call functions to test their functionality
testCompanyAccount();
testPeopleAccount();
testReccomendedUserAccount();
