import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly board: Repository<Board>,
    ) {}

    CreatePost(CreateBoardDto: BoardDto) {
        this.board.create(CreateBoardDto);
        return this.board.save(CreateBoardDto);
    }

    GetPostList() {
        return this.board.find({
            select: ["title", "text", "user", "createDate"],
            order: { createDate: -1 }
        });
    }
    GetPost(board_id: number) {
        return this.board.findOne(board_id);
    }

    async EditPost(board_id: number, EditBoardDto: BoardDto) {
        await this.board.update(board_id, EditBoardDto);
    }

    DeletePost(board_id: number) {
        return this.board.delete(board_id);
    }

}
