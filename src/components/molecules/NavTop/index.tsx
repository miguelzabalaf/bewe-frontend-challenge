import useController from "./controller";
import { NavTopProps } from "./types";
import View from "./view";

function NavTop(props: NavTopProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default NavTop;
