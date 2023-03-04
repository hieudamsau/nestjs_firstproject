import { Observer } from "./observer-subcriber";
import { Subject } from "./subject-interface";

export class TemperatureDisplay implements Observer{
    private subject : Subject;

    constructor(whetherStation : Subject){
        this.subject = whetherStation;
        whetherStation.registerObserver(this);

    }
    public update(temperature: number): void {
        console.log('TemperataureDisplay : i need to update my display')
    }
    
}