export interface Apple{
    useLightning(): void;
}


export interface Android{
    useTypeC() : void;
}


export class Iphone implements Apple{
    useLightning(): void {
        console.log("Using Lightning port ...");
    }
}



export class Samsung implements Android{
    useTypeC(): void {
       console.log("Using TypeC port ...");
    }
    
}


export class LightningToTypeC implements Android {
    iphone : Apple;
    constructor(iphone: Apple){
        this.iphone=iphone;
    }
    useTypeC(): void {
       console.log("Want to use TypeC , converting to Lightning...")
       this.iphone.useLightning();
    }
    
}


let iphone = new Iphone();
let changeAdapter = new LightningToTypeC(iphone);
changeAdapter.useTypeC();

