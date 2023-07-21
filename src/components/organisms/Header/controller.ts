import { useLocation } from "wouter";
import { HeaderControllerOutputProps, HeaderProps } from "./types";
import { useMemo } from "react";
import { authPath } from "../../../domain/constants/endpoints";
import { profileSelectors } from "../../../config/redux/selectors/profile";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../config/redux/actions/profile";

function useController(props: HeaderProps): HeaderControllerOutputProps {

    const [loation, setLocation] = useLocation();

    const { isAuthenticated: isAuthenticatedSelector } = profileSelectors();
    const isAuthenticated = useSelector(isAuthenticatedSelector());

    const dipatch = useDispatch();

    const { onChangeToken } = profileActions();

    function onLogin() {
        setLocation(`${ authPath }/login`);
    }

    function onSingUp() {
        setLocation(`${ authPath }/signup`);
    }

    function onLogout() {
        dipatch(onChangeToken(''));
    }

    const isLoginPage = useMemo(() => {
        return loation.includes('/login');
    }, [loation]);

    function handleAction() {
        if (isAuthenticated) {
            onLogout();
            return;
        }

        if (isLoginPage) {
            onSingUp();
        } else {
            onLogin();
        }
    }

    function getButtonText() {
        if (isAuthenticated) {
            return 'Logout';
        } else {
            return isLoginPage ? 'Sign up' : 'Login';
        }
    }

    return {
        ...props,
        isAuthenticated,
        isLoginPage,
        handleAction,
        getButtonText
    };
}

export default useController;