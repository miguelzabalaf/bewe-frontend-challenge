import useController from "./controller";
import { AvatarProps } from "./types";
import View from "./view";

function Avatar(props: AvatarProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Avatar;
