import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { AuthRole } from "./auth-role";
import { AuthStatus } from "./auth-status";

@Entity({name : 'auth'})
class Auth{
    @PrimaryGeneratedColumn()
    id : number

    @Column({unique : true})
    user_name : string

    @Column({unique : true})
    email : string

    @Column()
    password : string

    @Column({unique : true})
    phone : string
    
    @Column({default : AuthRole.User})
    role : AuthRole

    @Column({default : AuthStatus.Waiting})
    status : AuthStatus

    @Column()
    avatar : string
}


export default Auth;
