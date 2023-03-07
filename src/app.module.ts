import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Processing } from './observer/processing';
import { BankFactory } from 'factory/Bank-factory';



@Module({
  imports: [
    TestModule,
    TypeOrmModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,Processing,BankFactory],
})
export class AppModule {}
