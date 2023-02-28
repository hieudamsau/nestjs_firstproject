import { IsString, MinLength, MaxLength ,Matches , IsEmail  } from "@nestjs/class-validator";
import { AuthRole } from "../auth-role";
import { AuthStatus } from "../auth-status";


export class CreateAuthDto {
    @IsString()
    @MinLength(4, {
        message: 'Username is too short',
      })
    @MaxLength(20, {
        message: 'Username is too long',
      })
    user_name: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(4, {
        message: 'Password is too short',
      })
    @MaxLength(20, {
        message: 'Password is too long',
      })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
        message : "Password too week"
    })
    password: string;
    @IsString()
    phone: string;

    avatar: string;
    
    role : AuthRole.User

    status : AuthStatus.Waiting

}