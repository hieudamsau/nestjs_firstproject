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
        this.house.parts.push("Building wall");
    }
    buildFloor(): void {
        this.house.parts.push("Building floor");
    }
    buildDoor(): void {
        this.house.parts.push("Building door");
    }
    buildWindow(): void {
        this.house.parts.push("Building wall door");
    }
    buildRoof(): void {
        this.house.parts.push("Building wall roof");
    }
    buildPool(): void {
        this.house.parts.push("Building wall pool");
    }
    buildGarden(): void {
        this.house.parts.push("Building garden");
    }
    public getHouse() : House {
        const result = this.house;
        this.reset();
        return result;
    }
}