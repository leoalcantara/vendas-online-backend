import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(    
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}
    

    async createUser( CreateUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;
        
        const passwordHashed = await hash(CreateUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...CreateUserDto,
            type_user: 1,
            password: passwordHashed,
        });                  
    }  

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

}
