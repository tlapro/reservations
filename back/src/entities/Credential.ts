import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({
    name: "credentials",
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt?: Date;

    @CreateDateColumn()
    updatedAt?: Date;

    @OneToOne(() => User, (user) => user.credentials)
    @JoinColumn()
    user: User
}

