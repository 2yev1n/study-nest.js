import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    async create(CreateBoardDto): Promise<any> {
        const { title, text } = CreateBoardDto

        const board = new Board();
        board.title = title;
        board.text = text;

        this.boardRepository.save(CreateBoardDto);
    }
}
