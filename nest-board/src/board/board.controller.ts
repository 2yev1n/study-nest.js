import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { User } from 'src/user/user.entity';
import { BoardService } from './board.service';
import { BoardDto } from './dto/board.dto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}
   
   
    
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() CreateBoardDto: BoardDto,
        @Req() req: Request,
        ) {
        const post = await this.boardService.CreatePost(
            CreateBoardDto,
            req.user as User,
            );
        return post;
    }

    @Get()
    async getList() {
        const post = await this.boardService.GetPostList();
        return post;
    }

    @Get(":board_id")
    async getOne(@Param("board_id") board_id: number) {
        const post = await this.boardService.GetPost(board_id);
        return post;
    }

    @Patch(":board_id")
    async editPost(@Param("board_id") board_id:number, @Body() editBoardDto: BoardDto) {
        const post = await this.boardService.EditPost(board_id, editBoardDto);
        return post;
    }

    @Delete("board_id")
    async DeletePost(@Param("board_id") board_id: number) {
        const post = await this.boardService.DeletePost(board_id);
        return post;
    }
}
