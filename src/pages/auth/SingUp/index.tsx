import useController from "./controller";
import { SingUpProps } from "./types";
import View from "./view";

function SingUp(props: SingUpProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default SingUp;
