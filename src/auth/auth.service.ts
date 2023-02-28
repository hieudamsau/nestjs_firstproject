import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import myDataSource from 'src';
import { Repository } from 'typeorm';
import Auth from './auth.entity';
import { CreateAuthDto } from './DTO/create-authDto';
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt"


@Injectable()
export class AuthService {
    authRepository = myDataSource.getRepository(Auth);
    constructor (
        private jwtService : JwtService
    ){}
    async signUp(data : CreateAuthDto) {
        try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(data.password,salt);
        data.password  = hashPassword;
        await this.authRepository.save(data);
        return 'Sign up success !';
        } catch (err) {
            console.log(err.code);
            if(err.code === "ER_DUP_ENTRY"){
                throw new ConflictException('User exist !');
            }
        }
    }

    async signIn(data : CreateAuthDto){
        const {user_name , password} = data;
        const user =  await this.authRepository.findOne({where : {user_name : user_name}})
        if(user && ( await bcrypt.compare(password,user.password))){
            const payload = {user_name};
            const accessToken : string = await this.jwtService.sign(payload);
            return {
                user_name : user_name,
                accessToken : accessToken}; 
        }else{
            throw new UnauthorizedException('Username not exist or password incorrect !')
        }
    }


}
