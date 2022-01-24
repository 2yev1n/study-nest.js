import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(CreateUserDto): Promise<any> {
        const exUser = await this.userRepository.findOne({
            email: CreateUserDto.email
        });
        if (exUser) {
            throw new ForbiddenException({
                statusCode: HttpStatus.FORBIDDEN,
                messgae: "이미 등록된 사용자입니다.",
                error: 'Forbidden'
            })
        }
        const { password, ...result } = await
        this.userRepository.save(CreateUserDto);
        return result;
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find({
            select: ["userID", "email", "username"],
        });
    }

    findOne(id: number) : Promise<User> {
        return this.userRepository.findOne(
            {
                userID : id
            },
            {
                select: ["userID", "email", "username"]
            });
    }
}
