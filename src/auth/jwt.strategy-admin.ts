import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import myDataSource from 'src';
import { AuthRole } from './auth-role';
import Auth from './auth.entity';
import { JwtPayload } from './jwt-payload-interface';

@Injectable()
export class AdminGuard extends PassportStrategy(Strategy , 'admin'){
    auRepositiory = myDataSource.getRepository(Auth);
    constructor(){
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        });
    }
    async validate(payload : JwtPayload ){
        const {user_name} = payload;
        const user = await  this.auRepositiory.findOne({where : {user_name : user_name , role : AuthRole.Admin}});
        if(!user){
            throw new UnauthorizedException('Not allowed !');
        }
        return {
            id : user.id,
            user_name : user.user_name
        };
    }
}
