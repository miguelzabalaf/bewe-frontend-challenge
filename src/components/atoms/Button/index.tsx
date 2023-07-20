import useController from "./controller";
import { ButtonProps } from "./types";
import View from "./view";

function Button(props: ButtonProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default Button;
