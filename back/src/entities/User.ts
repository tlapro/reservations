import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    birthdate: string;

    @Column("integer")
    nDni: number;
    
    @OneToOne(() => Credential, (credential) => credential.user, { cascade: true })
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.userId)
    appointments: Appointment[]
    savedUser: { username: string; password: string; user: number; };
}

