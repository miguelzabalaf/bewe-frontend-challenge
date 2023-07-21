import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";

export function useInterceptor() {
    function handleRequestSuccess(request: any): InternalAxiosRequestConfig {
        request.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
        };
        return request;
    }

    function handleRequestError(error: any) {
        throw error;
    }

    function handleResponseSuccess(response: AxiosResponse): AxiosResponse {
        return response;
    }

    function handleResponseError(error: any) {
        throw error;
    }

    useEffect(() => {
        axios.defaults.params = {};
        axios.defaults.baseURL = process.env.REACT_APP_API_URL;
        axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
        axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    }, []);
}