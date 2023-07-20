import { PrivateRouteProps } from "./types";
import useController from "./controller";
import View from "./view";

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default PrivateRoute;
