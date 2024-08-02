import { admAccount } from "./class/AdmAccount"
import { CompanyAccount } from "./class/companyAcconut"
import { PeopleAccount } from "./class/PeopleAccount"




const companyAccount = new CompanyAccount('DIO',10);
console.log(companyAccount.getLoan(500));
console.log(companyAccount.deposit(30));
console.log(companyAccount.withDraw(43));
console.log(companyAccount);


const people = new PeopleAccount('Lucas', 11);
console.log(people.withDraw(2));
console.log(people.deposit(100));
console.log(people)

const adm = new admAccount('Administrador', 99);
console.log(adm.deposit(2));
console.log(adm.withDraw(5));
console.log(adm);