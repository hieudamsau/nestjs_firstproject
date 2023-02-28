import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  controllers: [TestController],
  providers: [TestService],
  imports : [AuthModule]
})
export class TestModule {}
