import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({
    name: "appointments",
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({default: "active"})
    status: string;

    @ManyToOne(() => User, user => user.appointments)
    user: User;
}
// export const AppointmentModel = AppDataSource.getRepository(Appointment);