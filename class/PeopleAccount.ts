import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
    this.doc_id = doc_id
  }
}