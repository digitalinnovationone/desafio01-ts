import { OtherAccount } from "../class/OtherAccount"

export const test_deposit_more_ten_ok = (other1Account: OtherAccount): void => {
    console.log("======== Teste de depósito com acrescimo ========")
    other1Account.getName()
    other1Account.getBalance()
    other1Account.deposit(100)
}