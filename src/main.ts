import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import myDataSource from 'src';

async function bootstrap() {

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


