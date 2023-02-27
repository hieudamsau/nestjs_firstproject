import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TestModule,
    TypeOrmModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
