import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports : [
        PassportModule.register({defaultStrategy : 'jwt'}),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions  : {
                expiresIn : "1d",
            },
        })
    ],
    controllers : [AuthController],
    providers : [AuthService]

})
export class AuthModule {}
