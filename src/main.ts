import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import myDataSource from 'src';
import { HomeTheaterFacade, Light, PopCornMaker, TV } from './facade/facade';
import { Singleton } from './singleton/singleton';
import { ConcreateHouse } from './builder/concreateBuilder';
import { Director } from './builder/director';
import { Iphone, LightningToTypeC } from './adapter/adapter';
import { Order } from './state/state';


async function bootstrap() {

//Facade

// let light = new Light();
// let tv = new TV();
// let popcorn_maker = new PopCornMaker();
// let home = new HomeTheaterFacade(light,tv,popcorn_maker);
// console.log("Me : I want to watch movie!");
// home.watchingMovie();
// console.log('Me : The movie has ended')
// home.endMovie(); 

//Singleton

// const s1 = Singleton.getInstance();
// s1.turnOnMusic();
// const s2 = Singleton.getInstance();
// if(s1 === s2){
//   console.log('same instance'); 
// }



//builder

// const house = new ConcreateHouse();
// const director = new Director();
// director.setHouseBuilder(house);

// console.log("House with pool : ");

// director.houseWithPool();
// house.getHouse().listParts()

// console.log("House with garden : ");

// director.houseWithGarden();
// house.getHouse().listParts()

// console.log("Bagic house : ");
// house.buildWall();
// house.buildFloor();
// house.buildDoor();
// house.buildWindow();
// house.buildRoof();
// house.getHouse().listParts();

//State
// let order = new Order();

// order.getCurrentState().verifyPayment()
// console.log('Trạng thái đơn hàng: ' + (<any> order.getCurrentState()).constructor.name);
// order.getCurrentState().shipOrder();
// console.log('Trạng thái đơn hàng: ' + (<any> order.getCurrentState()).constructor.name);  
// order.getCurrentState().shipOrder();
// console.log('Trạng thái đơn hàng: ' + (<any> order.getCurrentState()).constructor.name);


  myDataSource.initialize()
  .then(()=>{
      console.log("Database connect successfull !!");    
  })
  .catch(err =>{
    console.log(err);
  })
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
  console.log("Listen in host 3000")
}
bootstrap();


