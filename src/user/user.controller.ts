import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto} from './dtos/createuser.dto';
import { UserEntity } from './entities/user.entity'
import { UserService } from './user.service';



@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post() 
    async createUser( @Body() createUser: CreateUserDto): Promise<UserEntity>{       
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]>{
        return this.userService.getAllUsers();
    }
}


    