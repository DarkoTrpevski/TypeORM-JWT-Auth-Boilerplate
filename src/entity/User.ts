import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar" , length: 255})
    name: string;

    @Column({type: "varchar" , length: 255})
    email: string;

    @Column({type: "varchar" , length: 255})
    password: string;

}