import { User } from "../entities/user";

export interface LoginParams {
    email: User['email'];
    password: User['password'];
}

export interface SignInParams {
    name: User['name'];
    email: User['email'];
    password: User['password'];
}

export interface UserRepository {
    login(params: LoginParams): Promise<string>;
    signIn(params: SignInParams): Promise<User>;
}