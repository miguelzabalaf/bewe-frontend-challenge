import axios from "axios";
import { LoginParams, SignInParams } from "../reposiories/user";
import { endpoints } from "../constants/endpoints";
import { trackPromise } from "react-promise-tracker";

export function singUpService(params: SignInParams) {
    const request = axios.post(endpoints.auth.user.singUp, { data: { ...params } });
    return trackPromise(request);
}

export function loginService(params: LoginParams) {
    const request = axios.post(endpoints.auth.user.login, { data: { ...params } });
    return trackPromise(request);
}