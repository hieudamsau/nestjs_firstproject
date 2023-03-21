import { HouseBuilder } from "./builder";
import { House } from "./house.product";

export class ConcreateHouse implements HouseBuilder{
    private house : House;
    constructor(){
        this.reset();
    }
   
    public reset() : void{
        this.house = new House();
    }
    buildWall(): void {
        console.log("Building wall...")
    }
    buildFloor(): void {
        console.log("Building floor...")
    }
    buildDoor(): void {
        console.log("Building door...")
    }
    buildWindow(): void {
        console.log("Building window...")
    }
    buildRoof(): void {
        console.log("Building roof...")
    }
    buildPool(): void {
        console.log("Building pool...")
    }
    buildGarden(): void {
        console.log("Bulding garden...")
    }
    public getHouse() : House {
        const result = this.house;
        this.reset();
        return result;
    }
}