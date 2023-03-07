import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import myDataSource from 'src';
import { HomeTheaterFacade, Light, PopCornMaker, TV } from './facade/facade';

async function bootstrap() {

let light = new Light();
let tv = new TV();
let popcorn_maker = new PopCornMaker();

let home = new HomeTheaterFacade(light,tv,popcorn_maker);
console.log("Me : I want to watch movie!");
home.watchingMovie();
console.log('Me : The movie has ended')
home.endMovie();  
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


