import { Injectable } from "@nestjs/common/decorators";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import myDataSource from "src";
import Auth from "./auth.entity";
import { JwtPayload } from "./jwt-payload-interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'user'){
    auRepositiory = myDataSource.getRepository(Auth);
    constructor(){
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        });
    }
    async validate(payload : JwtPayload ){
        const {user_name} = payload;
        const user = await  this.auRepositiory.findOne({where : {user_name : user_name}});
        if(!user){
            throw new UnauthorizedException();
        }
        return {
            id : user.id,
            user_name : user.user_name
        };
    }
}