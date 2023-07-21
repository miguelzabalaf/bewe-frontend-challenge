import { User } from "../entities/user";

export interface UserLogged {
    message: string;
    data: User;
    token: string;
}

export interface UserRegistrated {
    message: string;
    data: User;
}