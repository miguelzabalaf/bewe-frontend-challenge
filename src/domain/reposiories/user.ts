import { User } from "../entities/user";
import { UserLogged, UserRegistrated } from "../models/user";

export interface LoginParams {
    email: User['email'];
    password: User['password'];
}

export interface SignUpParams {
    name: User['name'];
    email: User['email'];
    password: User['password'];
}

export interface UserRepository {
    login(params: LoginParams): Promise<UserLogged>;
    signUp(params: SignUpParams): Promise<UserRegistrated>;
}