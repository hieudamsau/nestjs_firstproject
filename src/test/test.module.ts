import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { PassportModule } from '@nestjs/passport';
@Module({
  controllers: [TestController],
  providers: [TestService],
  imports : [PassportModule]
})
export class TestModule {}
