import { useSelector } from "react-redux";
import { profileSelectors } from "../../../config/redux/selectors/profile";
import { PrivateRouteControllerOutputProps, PrivateRouteProps } from "./types";

function useController(props: PrivateRouteProps): PrivateRouteControllerOutputProps {
    const { isAuthenticated: isAuthenticatedSelector } = profileSelectors();
    const isAuthenticated = useSelector(isAuthenticatedSelector());

    return {
        ...props,
        isAuthenticated
    };
}

export default useController;