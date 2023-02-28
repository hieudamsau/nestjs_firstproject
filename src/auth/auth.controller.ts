import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './DTO/create-authDto';

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

}
