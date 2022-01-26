import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    boardID: number;

    @Column({ length: 20 })
    title: string;

    @Column({type:"text"})
    text;

    @ManyToOne(
        (type) => User,
        (user) => user.boards
    )
    user: User;

    @CreateDateColumn({
        name: "created_at"
    })
    createDate: Date;
    
    @UpdateDateColumn({
        name: "updated_at"
    })
    updateDate: Date;
}