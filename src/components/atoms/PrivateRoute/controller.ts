import { PrivateRouteControllerOutputProps, PrivateRouteProps } from "./types";

function useController(props: PrivateRouteProps): PrivateRouteControllerOutputProps {
    const isAuthenticated = false;
    return {
        ...props,
        isAuthenticated
    };
}

export default useController;