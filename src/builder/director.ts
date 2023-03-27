import { HouseBuilder } from "./builder";

export class Director{
    private house_builder : HouseBuilder;
    public setHouseBuilder(house_builder : HouseBuilder){
        this.house_builder = house_builder;
    }
    public houseWithPool(): void{
        this.house_builder.buildWall();
        this.house_builder.buildDoor();
        this.house_builder.buildFloor();
        this.house_builder.buildDoor();
        this.house_builder.buildRoof();
        this.house_builder.buildPool();
        
    }
    public houseWithGarden(): void {
        this.house_builder.buildWall();
        this.house_builder.buildDoor();
        this.house_builder.buildFloor();
        this.house_builder.buildDoor();
        this.house_builder.buildRoof();
        this.house_builder.buildGarden();
    }
}