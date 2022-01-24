import { Body, Controller, Get, Post } from '@nestjs/common';
import { brotliDecompress } from 'zlib';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) {}


    @Post('/sign_up')
    async signiup(@Body() userData: UserDTO): Promise<UserEntity> {
        return await this.userservice.signUp(userData);
    }

    @Post('/login')
    async login(@Body() userData: UserDTO) {
        return await this.userservice.login(userData);
    }
};
