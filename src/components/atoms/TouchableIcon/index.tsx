import useController from "./controller";
import { TouchableIconProps } from "./types";
import View from "./view";

function TouchableIcon(props: TouchableIconProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default TouchableIcon;
