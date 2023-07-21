import useController from "./controller";
import { AppRouterProps } from "./types";
import View from "./view";

function AppRouter(props: AppRouterProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default AppRouter;
