import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    async signUp(data: UserDTO): Promise<UserEntity> {
        const { email, name, password } = data;

        const user = new UserEntity();
        user.email = email;
        user.password = password;
        user.name = name;

        const User = await this.userRepository.findOne({
            where: {
                email : email
            },
        });

        if(User !== undefined) {
            throw Error;
            console.error()
        }

        await this.userRepository.save(user);
        console.log(user);
        return user;
    }

    async login(data: UserDTO): Promise<UserEntity>{

        const { email, password } = data;
    
        const user = await this.userRepository.findOne({
            where: {
                email: email,
            },
        });
        if(!user) {
            throw NotFoundException;
        }

        const Password = await user.password;

        if(Password !== password) {
            throw Error;
        }
        else return user
    }

}