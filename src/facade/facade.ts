

export class Light {
    turnOn(){
        console.log("Light : turn on");
    };
    turnOff(){
        console.log("Light : turn off !");
    };
}


export class TV {
    turnOn(){
        console.log("TV : turn on !");
    };
    turnOff(){
        console.log("TV : turn off !");
    }
}


export class PopCornMaker {
    turnOn(){
        console.log("PopCornMaker : Starting ....");
    }
    turnOff(){
        console.log("PopCornMaker : Stopped !");
    }
    pop(){
        console.log('PopCornMaker : Popping corn!');
    }
}


export class HomeTheaterFacade{
    private light : Light;
    private tv : TV;
    private popcorn_maker : PopCornMaker;
    constructor(light : Light,tv : TV,popcorn_maker : PopCornMaker){
        this.light = light;
        this.tv = tv;
        this.popcorn_maker = popcorn_maker;
    }
    watchingMovie(){
        this.light.turnOn();
        this.tv.turnOn();
        this.popcorn_maker.turnOn();
        this.popcorn_maker.pop();
    }
    endMovie(){
        this.light.turnOff();
        this.tv.turnOff();
        this.popcorn_maker.turnOff();
    }

}


