import { Bank } from "./bank-interface";



export class MBbank implements Bank {
    getBankName(): void {
        console.log("My name is MBBank");
    }
    
}


