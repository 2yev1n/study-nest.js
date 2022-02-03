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
            await this.boardService.CreatePost(
            CreateBoardDto,
            req.user as User,
            );
        return { status: 200, message: "게시물 작성 성공" };
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

    @UseGuards(JwtAuthGuard)
    @Patch(":board_id")
    async editPost(
        @Param("board_id") board_id:number, 
        @Body() editBoardDto: BoardDto, 
        @Req() req:Request,
        ) {
        await this.boardService.EditPost(board_id, editBoardDto, req.user as User);
        const post = await this.boardService.GetPost(board_id);
        return { status: 200, message: "수정 성공", post};
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":board_id")
    async DeletePost(
        @Param("board_id")  board_id: number,
        @Req() req:Request,
        ) {
        await this.boardService.DeletePost(board_id, req.user as User);
        return { status : 200, message: "삭제 성공" };
    }
}
