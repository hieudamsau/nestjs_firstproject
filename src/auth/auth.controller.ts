import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './DTO/create-authDto';
import { AuthGuard } from "@nestjs/passport"
import { AdminGuard } from './jwt.strategy-admin';
import { JwtStrategy } from './jwt.strategy';
@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){
        this.authService=authService
    }

    @Post('/sign-up')
    signUp(@Body() data : CreateAuthDto){
        return this.authService.signUp(data);
    }

    @Post('/sign-in')
    signIn(@Body() data : CreateAuthDto){
        return this.authService.signIn(data);
    }

    @Post('/test')
    @UseGuards(AuthGuard('admin'))
    test(@Req() req : any){
        console.log(req.user)
    }

}
