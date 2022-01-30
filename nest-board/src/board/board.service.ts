import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly board: Repository<Board>,
    ) {}

    async CreatePost(CreateBoardDto: BoardDto, user: User) {
        const board = new Board();

        board.title = CreateBoardDto.title;
        board.text = CreateBoardDto.text;
        board.user_ID = user.userID;

        const CreatedBoard = await this.board.save(board);
    }

    GetPostList() {
        return this.board.find({
            select: ["title", "text", "user_ID", "createDate"],
            order: { createDate: -1 }
        });
    }
    GetPost(board_id: number) {
        return this.board.findOne(board_id);
    }

    async EditPost(board_id: number, EditBoardDto: BoardDto, user: User) {
        console.log((await this.board.findOne(board_id)));
        console.log(user.userID);
        if((await this.board.findOne(board_id)).user_ID == user.userID)
        {
            await this.board.update(board_id, EditBoardDto);    
        }
        else throw Error;
        
    }

    DeletePost(board_id: number) {
        return this.board.delete(board_id);
    }

}
