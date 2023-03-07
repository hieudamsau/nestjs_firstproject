import { Observer } from "./observer-subcriber";
import { WeatherStation } from "./observer-weatherStation";


export class TemperatureDisplay implements Observer{
    constructor(private whetherStation : WeatherStation){
        whetherStation.registerObserver(this);
    }
    public update(temperature: number): void {
        console.log('TemperataureDisplay : i need to update my display')
    }
    
}