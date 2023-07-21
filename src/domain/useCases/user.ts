import { UserRepository, SignUpParams, LoginParams } from '../reposiories/user';

export function userUseCases(respository: UserRepository) {
    return {
        async signUp(params: SignUpParams) {
            return respository.signUp(params);
        },
        async login(params: LoginParams) {
            return respository.login(params);
        }
    };
}