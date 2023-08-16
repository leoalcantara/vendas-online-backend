import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto} from './dtos/createuser.dto'
import { json } from 'stream/consumers';
@Controller('user')
export class UserController {

    @Post() 
    async createUser( @Body() createUser: CreateUserDto){
       
            return {
                ...createUser,
                password: undefined
            }
       

    }


    @Get()
    async getAllUsers(){
        JSON.stringify({test: 'abc'})
    }
}


    