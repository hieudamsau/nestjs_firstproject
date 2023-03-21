import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Processing } from './observer/processing';
import { BankFactory } from 'src/factory/Bank-factory';



@Module({
  imports: [
    TestModule,
    TypeOrmModule,
    UserModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
