import { UserRepository, LoginParams, SignUpParams } from '../reposiories/user';
import { UserLogged, UserRegistrated } from '../models/user';
import { loginService, singUpService } from '../services/user';

export function userImplementation(): UserRepository {
    return {
        login(params: LoginParams): Promise<UserLogged> {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await loginService(params);
                    resolve(response.data);
                } catch (error) {
                    reject(error);
                }
            });
        },
        signUp(params: SignUpParams): Promise<UserRegistrated> {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await singUpService(params);
                    resolve(response.data);
                } catch (error) {
                    reject(error);
                }
            });
        },
    };
}