import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
    docId: number;

    constructor(docId: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.docId = docId;
    }
}
