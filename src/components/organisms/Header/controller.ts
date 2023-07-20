import { useLocation } from "wouter";
import { HeaderControllerOutputProps, HeaderProps } from "./types";
import { useMemo } from "react";
import { authPath } from "../../../domain/constants/endpoints";

function useController(props: HeaderProps): HeaderControllerOutputProps {

    const [loation, setLocation] = useLocation();

    const isAuthenticated = false;

    function onLogin() {
        setLocation(`${ authPath }/login`);
    }

    function onSingin() {
        setLocation(`${ authPath }/singin`);
    }

    // function onLogout() {
    //     // TODO
    // }

    const isLoginPage = useMemo(() => {
        return loation.includes('/login');
    }, [loation]);

    function handleAction() {
        if (isLoginPage) {
            onSingin();
        } else {
            onLogin();
        }
    }

    return {
        ...props,
        isAuthenticated,
        isLoginPage,
        handleAction,
    };
}

export default useController;