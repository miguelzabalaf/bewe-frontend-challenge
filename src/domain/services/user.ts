import axios from "axios";
import { LoginParams, SignUpParams } from "../reposiories/user";
import { endpoints } from "../constants/endpoints";
import { trackPromise } from "react-promise-tracker";

export function singUpService(params: SignUpParams) {
    const request = axios.post(endpoints.auth.user.signUp, { ...params });
    return trackPromise(request);
}

export function loginService(params: LoginParams) {
    const request = axios.post(endpoints.auth.user.login, { ...params });
    return trackPromise(request);
}