export interface IAppointment {
    id: number,
    date: string,
    time: string,
    userId: number,
    status: UserStatus,
}

export enum UserStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"

}
