import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    boardID: number;

    @Column({ length: 20 })
    title: string;

    @Column({ type:"text" })
    text: string;

    @CreateDateColumn({
        name: "created_at"
    })
    createDate: Date;
    
    @UpdateDateColumn({
        name: "updated_at"
    })
    updateDate: Date;

    @ManyToOne(
        (type) => User,
        (user) => user.board,
        { nullable : false }
    )
    user: User;
}