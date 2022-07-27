import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserPostEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    mobile_no: number;

    @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

}