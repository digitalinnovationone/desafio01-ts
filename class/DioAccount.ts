export abstract class DioAcount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0 ;
    private status: boolean = true;

    constructor(newName: string, newAccountNumber: number){
        this.name = newName;
        this.accountNumber = newAccountNumber; 
    }
    // setName = (name: string) => {
    //     console.log('set name success')
    //     this.name = name
    // }
    getName = () => {
        return this.name
    }

    setStatus = (value:boolean):void => {
        this.status = value;
    }

    getBalance = ()=>{
        return this.balance
    }

    setBalance= (value: number):void => {
        this.balance =value;
    }

    readonly validateStatus = () :boolean => {
        if(this.status){
            return this.status
        }
        throw new Error('Conta desativada')
    }

    deposit = (value:number): void => {
        if(this.validateStatus()){
        this.balance += value;
            console.log("deposit success!")
        }
    }
    
    withDraw = (value: number): void => {
        if(this.validateStatus()){
           if(this.balance >= value){
             this.balance -= value;           
            }else{
             throw new Error('Saldo Insuficiente')
            }
           console.log("Withdraw success!")
        }else{
            throw new Error('Conta desativada')
        }
    }
    
}