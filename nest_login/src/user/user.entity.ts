import { Entity, Unique, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
@Unique('my_unique_constraint', ['email'])
export class UserEntity {

    @PrimaryColumn({length: 30, unique: true})
    email: string;

    @Column({length: 10})
    name: string;

    @Column({length: 30})
    password: string;

    @Column("datetime", {
        name: "last_login_date",
        default: null
    })
    lastLoginData: Date;

    @CreateDateColumn({
        name: "created_at"
    })
    createdDate: Date;

    @UpdateDateColumn({
        name: "updated_at"
    })
    updatedDate: Date;
}