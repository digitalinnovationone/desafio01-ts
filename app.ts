import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

import { 
    test_deposit_ok_inative_account_and_withdraw_error, 
    test_deposit_withdraw_ok,
    test_deposit_with_inative_account_error,
    test_deposit_withdraw_without_money_error
 } from './tests/PeopleAccount'
import { 
    test_loan_ok,
    test_loan_with_account_inative_error, 
    test_loan_with_value_negative_error,
    test_loan_with_balance_negative_error
} from './tests/CompanyAccount'
import { test_deposit_more_ten_ok } from './tests/OtherAccount'

const person1Account: PeopleAccount = new PeopleAccount(123456,'Giovanni', 76454465)
const person2Account: PeopleAccount = new PeopleAccount(123456,'Everton', 76454465)
const person3Account: PeopleAccount = new PeopleAccount(123456,'Helena', 76454465)
const person4Account: PeopleAccount = new PeopleAccount(123456,'Roberta', 76454465)

const company1Account: CompanyAccount = new CompanyAccount("Dio 1 Company", 45687321)
const company2Account: CompanyAccount = new CompanyAccount("Dio 2 Company", 45687321)
const company3Account: CompanyAccount = new CompanyAccount("Dio 3 Company", 45687321)
const company4Account: CompanyAccount = new CompanyAccount("Dio 4 Company", 45687321)

const otherAccount: OtherAccount = new OtherAccount("Steven", 1864423)

const execPersonTest = () => {
    console.log("============================= Person Account Test =============================");
    test_deposit_withdraw_ok(person1Account)
    console.log("");
    test_deposit_ok_inative_account_and_withdraw_error(person2Account)
    console.log("");
    test_deposit_with_inative_account_error(person3Account)
    console.log("");
    test_deposit_withdraw_without_money_error(person4Account)
    console.log("");
}

execPersonTest()

const execCompanyTest = () => {
    console.log("============================= Company Account Test =============================");
    test_loan_ok(company1Account, person1Account)
    console.log("");
    test_loan_with_account_inative_error(company2Account, person2Account)
    console.log("")
    test_loan_with_value_negative_error(company3Account, person3Account)
    console.log("");
    test_loan_with_balance_negative_error(company4Account, person4Account)
    console.log("");
}

execCompanyTest()

const execOtherTest = () => {
    console.log("============================= Other Account Test =============================");
    test_deposit_more_ten_ok(otherAccount)
}

execOtherTest()