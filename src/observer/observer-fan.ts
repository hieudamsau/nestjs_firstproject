import { Observer } from "./observer-subcriber";
import { Subject } from "./subject-interface";

export class Fan implements Observer{
    private subject : Subject;

    constructor(whetherStation : Subject){
        this.subject = whetherStation;
        whetherStation.registerObserver(this);
        
    }
    public update(temperature: number): void {
        //logic would be here
        if(temperature >= 25 ){
            console.log('Fan : its hot hear , turning myself on ...')
        }else{
            console.log('Fan : its cool now , turning myself off ...')
        }
    }
    
}
