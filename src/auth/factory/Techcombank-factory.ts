import { Bank } from "./bank-interface";



export class Techcombank implements Bank {
    getBankName(): void {
        console.log("My name is Tecombank");
    }
    
}
