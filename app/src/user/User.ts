import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class User {
    
    @PrimaryGeneratedColumn('rowid')    // AI와 PK
    id: number;

    @PrimaryColumn()
    userId: string;

    @Column()
    userName: string;

    @Column()
    age: number;
    
    @Column({ default: true })
    isActive: boolean;
}