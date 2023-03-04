
import { Observer } from "./observer-subcriber";
import { WeatherStation } from "./observer-weatherStation";
import { Subject } from "./subject-interface";


export class Heat implements Observer{
    constructor(private weatherStation : WeatherStation){ 
        this.weatherStation.registerObserver(this);
    }

    public update(temperature: number): void {
        if (temperature <= 15){
            console.log("Heat : its very cold, please turn me on... ");
        }else{
            console.log("Heat : its warm now, please turn me off... ");
        }

    }
}