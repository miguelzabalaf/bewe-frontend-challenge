import { UserRepository, SignInParams, LoginParams } from '../reposiories/user';

export function userUseCases(respository: UserRepository) {
    return {
        async signIn(params: SignInParams) {
            return respository.signIn(params);
        },
        async login(params: LoginParams) {
            return respository.login(params);
        }
    };
}