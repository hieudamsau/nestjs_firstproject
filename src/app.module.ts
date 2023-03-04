import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
// import { ClientController } from './client/client.controller';
// import { ClientController } from './kafka/client/client.controller';
import { WeatherStation } from './observer/observer-weatherStation';
import { Processing } from './observer/processing';



@Module({
  imports: [
    TestModule,
    TypeOrmModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,Processing],
})
export class AppModule {}
