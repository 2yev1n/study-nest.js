import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
}