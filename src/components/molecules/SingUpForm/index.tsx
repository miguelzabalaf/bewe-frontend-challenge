import useController from "./controller";
import { SingUpFormProps } from "./types";
import View from "./view";

function SingUpForm(props: SingUpFormProps): JSX.Element {
    const controllerProps = useController(props);
    return <View {...controllerProps} />;
}

export default SingUpForm;
