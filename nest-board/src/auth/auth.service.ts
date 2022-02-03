import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async validateUser(loginUserDto: LoginUserDto) : Promise<any> {
        const user = await this.userRepository.findOne({
            email: loginUserDto.email
        });
        
        if(!user) {
            throw new ForbiddenException({
                statusCode: HttpStatus.FORBIDDEN,
                message: "등록되지 않은 사용자입니다.",
                error: 'Forbidden'
            })
        }

        console.log(user.password);
        console.log(loginUserDto.password);

        if (user.password === loginUserDto.password) {
            const { password, ...result } = user;
            return result;
        } else {
            throw new ForbiddenException({
                statusCode: HttpStatus.FORBIDDEN,
                messgae: "사용자 정보가 일치하지 않습니다.",
                error: 'Forbidden',
            })
        }
    }

    async login(user: any) {
        const payload = {
            email: user.email,
            username: user.usrename,
            userID: user.userID,
        };
        return {
            accessToken : this.jwtService.sign(payload)
        }
    }
}
