import { Injectable } from "@nestjs/common";
import { Fan } from "./observer-fan";;
import { WeatherStation } from "./observer-weatherStation";

@Injectable()
export class Processing {
    processWeatherstation(temp : number) {
    let weatherStation = new WeatherStation()
    let fan = new Fan(weatherStation);
    weatherStation.setTemperture(temp);
    }
}

let process = new Processing();
process.processWeatherstation(20);
process.processWeatherstation(30) 