import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';



@Module({
  imports: [
    TestModule,
    TypeOrmModule,
    UserModule,
    AuthModule,
    StudentModule,
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
