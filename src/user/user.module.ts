import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserEntity } from './interfaces/user.entity';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
