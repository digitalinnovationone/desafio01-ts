class PersonalAccount {
    private name: string
    private accountnumber : number
    private balance: number = 0
    

    constructor (name: string, accountnumber: number){
        this.name = name
        this.accountnumber = accountnumber
    }

    deposit(amount: number): void{
        this.balance += amount
    }

    getName(): string{
        return this.name
    }

    getBalance(): number{
        return this.balance
    }

  
}

class getAccount extends PersonalAccount{
    deposit(amount: number): void {
        super.deposit(amount)
    }
   }

const account = new getAccount("Nathaly",659)
account.deposit(100)
console.log(`Saldo de ${account.getName()}: R$ ${account.getBalance()}`)