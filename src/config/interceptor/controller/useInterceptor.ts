import { EnhancedStore } from "@reduxjs/toolkit";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { StoreState } from "../../redux/controllers/useStoreConfig";
import { profileActions } from "../../redux/actions/profile";

export function useInterceptor(store: EnhancedStore<StoreState>) {
    const { profile } = store.getState();
    const { logout } = profileActions();
    function handleRequestSuccess(request: any): InternalAxiosRequestConfig {
        if (profile.auth.token) request.headers['Authorization'] = `Bearer ${ profile.auth.token }`;
        request.headers = {
            ...request.headers,
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
        if (error.response.status === 403) {
            store.dispatch(logout());
        }
        throw error;
    }

    useEffect(() => {
        axios.defaults.params = {};
        axios.defaults.baseURL = process.env.REACT_APP_API_URL;
        axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
        axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    }, []);
};