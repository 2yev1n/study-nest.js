import { Board } from "src/board/board.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userID: number;

    @PrimaryColumn()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @OneToMany(
        (type) => Board, 
        (board) => board.user,
        )
    board: Board[];
}