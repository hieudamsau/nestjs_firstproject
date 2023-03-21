import { Injectable } from "@nestjs/common";
import { BankName } from "./bank-erum";
import { MBbank } from "./MbBank-factory";
import { Techcombank } from "./Techcombank-factory";

@Injectable()
export class BankFactory{
    public viewBank(bank_name : string) {
        if(bank_name === BankName.Techcombank){
            const bank = new Techcombank();
            return bank.getBankName()
        }if(bank_name === BankName.MBBank){
            const bank = new MBbank()
            return bank.getBankName();
        }
    }

}
let a = new BankFactory();
a.viewBank(BankName.Techcombank);


