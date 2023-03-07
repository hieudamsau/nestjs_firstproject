import { Injectable } from "@nestjs/common";
import { Observer } from "./observer-subcriber";
import { Subject } from "./subject-interface";


  
@Injectable()
export class WeatherStation implements Subject {
    
    registerObserver(observer: Observer) {
        this.observers.push(observer);
    }
    removeOserver(observer: Observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index,1)
    }
    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.temperature);
            
        });
    }
    private temperature : number;
    private observers: Observer[] = [];
    setTemperture (temp : number,observer?: Observer){
        console.log("Weather to day : " + temp);
        this.temperature = temp;
        if(observer){
            this.removeOserver(observer)
        }
        this.notifyObservers()
    }
}


