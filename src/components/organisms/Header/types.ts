export interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {

}

export interface HeaderControllerMethods {
    handleAction: () => void;
    getButtonText: () => string;
}

export interface HeaderControllerOutputProps extends HeaderProps, HeaderControllerMethods {
    isAuthenticated: boolean;
    isLoginPage: boolean;
}