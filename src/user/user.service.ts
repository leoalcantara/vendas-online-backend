import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser( CreateUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        
        const passwordHashed = await hash(CreateUserDto.password, saltOrRounds);

        //armazenando os dados dos usuarios na memoria
        const user: User = {
            ...CreateUserDto,
            id: this.users.length + 1,
            password: passwordHashed
        }

        this.users.push(user)

        //console.log( passwordHashed )
        return user;
            
    }  

}
